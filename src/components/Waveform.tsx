
import React, { useEffect, useRef } from 'react';

interface WaveformProps {
  className?: string;
}

export const Waveform: React.FC<WaveformProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
        const parent = canvas.parentElement;
        if (parent) {
            const width = parent.clientWidth || 800; // Fallback width
            const height = parent.clientHeight || 256; // Fallback height
            canvas.width = width* 0.6; // 移除 * 1.5，使用正常宽度
            canvas.height = height;
            console.log('Canvas resized:', canvas.width, canvas.height); // Debug
        }
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
        time += 0.02; // 减慢速度：从 0.05 改为 0.02
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const width = canvas.width;
        const height = canvas.height;
        const centerY = height / 2;
        
        // Bar settings - Finer bars for high-end look
        const barWidth = 2; // Thinner bars
        const barGap = 4;   // Adequate gap
        const totalBarWidth = barWidth + barGap;
        const barCount = Math.ceil(width / totalBarWidth);

        // Brighter, sharper gradient
        const gradient = ctx.createLinearGradient(0, centerY - 150, 0, centerY + 150);
        gradient.addColorStop(0.0, 'rgba(139, 92, 246, 0.0)');   // Fade top
        gradient.addColorStop(0.3, 'rgba(167, 139, 250, 0.8)'); // Purple
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 1.0)'); // White center (Bright!)
        gradient.addColorStop(0.7, 'rgba(34, 211, 238, 0.8)');  // Cyan
        gradient.addColorStop(1.0, 'rgba(34, 211, 238, 0.0)');  // Fade bottom

        ctx.fillStyle = gradient;

        for (let i = 0; i < barCount; i++) {
            const x = i * totalBarWidth;
            
            // Normalized X within canvas (-1 to 1)
            const normX = (x - width / 2) / (width / 3.5); // 3.5 Divisor to keep wave centered

            // Create distinct "humps" using Gaussian functions
            // Main center hump
            const hump1 = Math.exp(-Math.pow(normX, 2) * 2);
            // Side humps
            const hump2 = Math.exp(-Math.pow(normX - 0.8, 2) * 5) * 0.6;
            const hump3 = Math.exp(-Math.pow(normX + 0.8, 2) * 5) * 0.6;
            
            const shape = hump1 + hump2 + hump3;

            // Dynamic movement
            // Using symmetrical noise
            const noiseX = Math.abs(normX * 10); // Symmetry
            const noise = Math.sin(noiseX - time * 2) * Math.cos(noiseX * 0.5 + time) * 0.5 + 0.5;
            
            // Beat pulse
            const pulse = Math.pow(Math.sin(time * 3), 4) * 0.15;

            // Combined height
            let barHeight = (shape * noise + pulse) * (height * 0.6);
            
            // Min height for visibility
            barHeight = Math.max(4, barHeight);
            
            // Taper edges completely
            if (Math.abs(normX) > 1.5) barHeight *= 0;

            // Draw Bar (Symmetrical)
            ctx.beginPath();
            if (ctx.roundRect) {
                ctx.roundRect(x, centerY - barHeight / 2, barWidth, barHeight, 2);
            } else {
                ctx.rect(x, centerY - barHeight / 2, barWidth, barHeight);
            }
            ctx.fill();
        }
        
        // Center line
        ctx.beginPath();
        ctx.moveTo(0, centerY);
        ctx.lineTo(width, centerY);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.stroke();

        animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative w-full h-64 overflow-visible ${className}`} style={{ minHeight: '256px' }}>
        {/* Container that allows overflow visually but can be placed in grid */}
        <canvas 
            ref={canvasRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-full pointer-events-none"
            style={{ zIndex: 1 }}
        />
        
        {/* Optional: Add track names overlay if needed, but keeping it clean for now as requested "elements" likely refers to visual style */}
    </div>
  );
};
