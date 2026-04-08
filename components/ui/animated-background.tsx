"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5; // Ukuran partikel bervariasi tapi tetap kecil
        
        // Kecepatan diatur jauh lebih lambat agar terlihat "rapih" dan elegan
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Jika partikel keluar layar, munculkan lagi di sisi berlawanan
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        // Warna putih keabuan untuk partikel agar cocok dengan mode gelap
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      // Sesuaikan jumlah partikel dengan lebar layar untuk menjaga kerapian
      const particleCount = Math.min(Math.floor(window.innerWidth / 15), 100); 
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animateParticles);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animateParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 h-[100vh] w-[100vw] overflow-hidden pointer-events-none bg-background">
      {/* Canvas for Particles */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 mix-blend-screen opacity-60"
      />
      
      {/* Very Subtle Grid Pattern for Neatness */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Decorative Glowing Orbs - Reduced size, opacity, and slowed down */}
      <div 
        className="absolute top-[-5%] left-[-5%] h-[40vw] w-[40vw] rounded-full bg-primary/10 blur-[130px] animate-pulse-glow" 
        style={{ animationDuration: '16s' }}
      ></div>
      <div 
        className="absolute bottom-[-10%] right-[-5%] h-[45vw] w-[45vw] rounded-full bg-accent/10 blur-[130px] animate-pulse-glow" 
        style={{ animationDuration: '22s', animationDelay: '2s' }}
      ></div>

      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 z-10 bg-background/30 backdrop-blur-[1px] [mask-image:linear-gradient(to_bottom,transparent_20%,#000_100%)]"></div>
    </div>
  );
}
