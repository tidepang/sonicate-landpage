
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const StarBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // SCENE
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a1a, 0.001);

    // CAMERA
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    containerRef.current.appendChild(renderer.domElement);

    // PARTICLES
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);

    const color1 = new THREE.Color(0x8b5cf6); // Purple
    const color2 = new THREE.Color(0x06b6d4); // Cyan

    for(let i = 0; i < particlesCount * 3; i+=3) {
        // Position
        posArray[i] = (Math.random() - 0.5) * 200; // x
        posArray[i+1] = (Math.random() - 0.5) * 100; // y
        posArray[i+2] = (Math.random() - 0.5) * 200; // z

        // Randomly pick color 1 or 2 with some variation
        const mixedColor = Math.random() > 0.5 ? color1 : color2;
        colorsArray[i] = mixedColor.r;
        colorsArray[i+1] = mixedColor.g;
        colorsArray[i+2] = mixedColor.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // NEBULA GLOW (Large soft particles)
    const nebulaGeometry = new THREE.BufferGeometry();
    const nebulaCount = 20;
    const nebulaPos = new Float32Array(nebulaCount * 3);
    
    for(let i = 0; i < nebulaCount * 3; i+=3) {
      nebulaPos[i] = (Math.random() - 0.5) * 100;
      nebulaPos[i+1] = (Math.random() - 0.5) * 50;
      nebulaPos[i+2] = (Math.random() - 0.5) * 60 - 20; // Slightly behind
    }
    
    nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(nebulaPos, 3));
    
    // Create a soft circle texture for nebula programmatically
    const getTexture = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');
        if(!ctx) return null;
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
        gradient.addColorStop(0.5, 'rgba(255,255,255,0.2)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
        const texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;
    };

    const nebulaMaterial = new THREE.PointsMaterial({
        size: 40,
        map: getTexture() || undefined,
        transparent: true,
        opacity: 0.15, // Very faint
        color: 0x6d28d9, // Deep purple base
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const nebulaMesh = new THREE.Points(nebulaGeometry, nebulaMaterial);
    scene.add(nebulaMesh);

    // MOUSE INTERACTION
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // ANIMATE
    const clock = new THREE.Clock();

    const animate = () => {
        const elapsedTime = clock.getElapsedTime();

        // Rotate particles slowly
        particlesMesh.rotation.y = elapsedTime * 0.05;
        particlesMesh.rotation.x = mouseY * 0.2;
        
        // Nebula breathing (scale/opacity)
        const breathe = Math.sin(elapsedTime * 0.5) * 0.05 + 1; // 0.95 to 1.05
        nebulaMesh.scale.set(breathe, breathe, breathe);
        nebulaMesh.rotation.z = elapsedTime * 0.02;

        // Camera gentle drift
        camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 5 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };

    animate();

    // RESIZE
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        if (containerRef.current) {
            containerRef.current.removeChild(renderer.domElement);
        }
        // Cleanup
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        nebulaGeometry.dispose();
        nebulaMaterial.dispose();
        renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none bg-black"
    />
  );
};
