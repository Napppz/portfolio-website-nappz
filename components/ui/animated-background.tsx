"use client";

import { useEffect, useRef, useState } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number; // in radians
  alpha: number;
  width: number;
  active: boolean;
  delay: number;
}

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

    let animationFrameId: number;
    let stars: Star[] = [];
    let meteors: Meteor[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initElements();
    };

    const initElements = () => {
      // 1. Initialize twinkling stars
      stars = [];
      const starCount = Math.min(Math.floor(window.innerWidth / 10), 120);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.6 + 0.6,
          baseAlpha: Math.random() * 0.5 + 0.2,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }

      // 2. Initialize shooting stars / meteors (falling towards bottom-left at ~45 deg)
      meteors = [];
      const meteorCount = 5;
      for (let i = 0; i < meteorCount; i++) {
        meteors.push(createMeteor(true, i * 60));
      }
    };

    const createMeteor = (initial = false, extraDelay = 0): Meteor => {
      // Angle: around 215 to 225 degrees (falling from top-right to bottom-left)
      const angle = (220 * Math.PI) / 180;
      return {
        x: Math.random() * (canvas.width + 400),
        y: initial ? Math.random() * canvas.height * 0.6 : -100,
        length: Math.random() * 120 + 90,
        speed: Math.random() * 10 + 12,
        angle: angle,
        alpha: Math.random() * 0.5 + 0.5,
        width: Math.random() * 1.5 + 1.2,
        active: initial,
        delay: initial ? extraDelay : Math.floor(Math.random() * 180 + 30),
      };
    };

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- Draw Twinkling Stars ---
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const currentAlpha =
          star.baseAlpha + Math.sin(tick * star.twinkleSpeed + star.twinkleOffset) * 0.25;
        const clampedAlpha = Math.max(0.1, Math.min(1, currentAlpha));

        ctx.fillStyle = `rgba(200, 240, 255, ${clampedAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- Draw Meteors / Shooting Stars ---
      for (let i = 0; i < meteors.length; i++) {
        const m = meteors[i];

        if (!m.active) {
          if (m.delay > 0) {
            m.delay--;
          } else {
            m.active = true;
          }
          continue;
        }

        // Calculate meteor head position
        const cos = Math.cos(m.angle);
        const sin = Math.sin(m.angle);

        m.x += cos * m.speed;
        m.y += sin * m.speed;

        // Tail starts from head backwards
        const tailX = m.x - cos * m.length;
        const tailY = m.y - sin * m.length;

        // Gradient for meteor tail: cyan glowing head fading to transparent
        const gradient = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        gradient.addColorStop(0, "rgba(0, 255, 210, 0)");
        gradient.addColorStop(0.6, "rgba(0, 230, 255, 0.4)");
        gradient.addColorStop(1, `rgba(180, 255, 245, ${m.alpha})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = m.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        // Small glowing head star
        ctx.fillStyle = `rgba(255, 255, 255, ${m.alpha})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.width * 1.1, 0, Math.PI * 2);
        ctx.fill();

        // Reset if off-screen
        if (m.x < -200 || m.y > canvas.height + 200) {
          meteors[i] = createMeteor(false);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <div className="fixed inset-0 -z-50 h-[100vh] w-[100vw] overflow-hidden pointer-events-none bg-[#030712]">
        {/* Deep cosmic gradient */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0, 240, 255, 0.08) 0%, transparent 70%), radial-gradient(ellipse 70% 50% at 90% 90%, rgba(0, 160, 255, 0.05) 0%, transparent 60%), #030712",
          }}
        />

        {/* Canvas for Shooting Stars & Twinkling Stars */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />

        {/* Ambient atmospheric cyan glow orbs */}
        <div className="absolute top-1/4 left-1/4 h-[35vw] w-[35vw] rounded-full bg-[#00ffd2]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 h-[35vw] w-[35vw] rounded-full bg-[#0088ff]/5 blur-[130px] pointer-events-none" />
      </div>

      {/* Floating Mouse Scroll Indicator (Left Side, like arifgiovanni.my.id) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-1 text-slate-400 z-30 pointer-events-none opacity-60 hover:opacity-100 transition-opacity">
        <div className="w-5 h-9 rounded-full border-2 border-slate-400/60 flex justify-center pt-1.5 shadow-sm">
          <div className="w-1 h-2 rounded-full bg-[#00ffd2] animate-bounce" />
        </div>
        <svg
          className="w-3.5 h-3.5 text-slate-400/80 animate-pulse mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </>
  );
}
