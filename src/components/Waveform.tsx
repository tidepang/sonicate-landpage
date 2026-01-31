
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
            canvas.width = parent.clientWidth * 1.5; // Break bounds intentionally
            canvas.height = parent.clientHeight;
        }
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
        time += 0.05;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const width = canvas.width;
        const height = canvas.height;
        const centerY = height / 2;
        
        // Gradient
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)'); // Purple fade
        gradient.addColorStop(0.4, 'rgba(6, 182, 212, 0.6)'); // Cyan center-ish
        gradient.addColorStop(0.6, 'rgba(167, 139, 250, 0.6)'); // Purple center-ish
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0.1)'); // Cyan fade

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';

        const bars = 100;
        const step = width / bars;

        for (let i = 0; i < bars; i++) {
            const x = i * step;
            
            // Distance from center (0 to 1) for tapering
            const distFromCenter = Math.abs((x - width / 2) / (width / 2));
            const taper = Math.max(0, 1 - distFromCenter * 1.5); // Taper off edges

            // Wave calculation
            // Mix of sine waves for organic look
            const noise = Math.sin(i * 0.2 + time) + Math.sin(i * 0.5 - time * 2) * 0.5;
            const barHeight = Math.max(10, taper * 150 * (Math.abs(noise) + 0.2));

            ctx.beginPath();
            ctx.moveTo(x, centerY - barHeight / 2);
            ctx.lineTo(x, centerY + barHeight / 2);
            
            // Opacity fade based on taper
            ctx.globalAlpha = taper;
            ctx.stroke();
        }
        
        // Connecting line
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
    <div className={`relative w-full h-64 overflow-visible ${className}`}>
        {/* Container that allows overflow visually but can be placed in grid */}
        <canvas 
            ref={canvasRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-full pointer-events-none" 
        />
    </div>
  );
};
