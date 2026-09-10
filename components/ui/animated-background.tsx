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
  headGlowSize: number;
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
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Fixed realistic falling angle: from top-right to bottom-left (~138 degrees)
    // cos(138°) < 0 (moves left), sin(138°) > 0 (moves down)
    const baseAngle = (138 * Math.PI) / 180;

    const createMeteor = (randomInitialPos = false): Meteor => {
      // Layering: 3 tiers of meteors for atmospheric depth
      const tier = Math.random();
      let speed: number;
      let length: number;
      let widthRatio: number;
      let alpha: number;

      if (tier < 0.35) {
        // Distant, subtle meteors
        speed = Math.random() * 5 + 7;
        length = Math.random() * 50 + 60;
        widthRatio = Math.random() * 0.4 + 0.9;
        alpha = Math.random() * 0.25 + 0.35;
      } else if (tier < 0.8) {
        // Mid-distance meteors
        speed = Math.random() * 7 + 11;
        length = Math.random() * 70 + 110;
        widthRatio = Math.random() * 0.5 + 1.3;
        alpha = Math.random() * 0.3 + 0.6;
      } else {
        // Foreground, blazing shooting stars
        speed = Math.random() * 9 + 17;
        length = Math.random() * 100 + 180;
        widthRatio = Math.random() * 0.8 + 1.8;
        alpha = Math.random() * 0.2 + 0.8;
      }

      // Angle slight variation
      const angle = baseAngle + (Math.random() * 0.08 - 0.04);

      let x: number;
      let y: number;

      if (randomInitialPos) {
        // Pre-populate across the entire visible canvas so screen is alive instantly
        x = Math.random() * (width + 400) - 100;
        y = Math.random() * (height + 200) - 100;
      } else {
        // Spawn from top edge or right edge
        if (Math.random() < 0.65) {
          // Spawn along top edge extending past right side
          x = Math.random() * (width + 500) - 100;
          y = -Math.random() * 120 - 40;
        } else {
          // Spawn along right edge
          x = width + Math.random() * 180 + 30;
          y = Math.random() * (height * 0.8);
        }
      }

      return {
        x,
        y,
        length,
        speed,
        angle,
        alpha,
        width: widthRatio,
        headGlowSize: widthRatio * 3.6,
      };
    };

    const initElements = () => {
      // 1. Twinkling Background Stars
      stars = [];
      const starCount = Math.min(Math.floor(width / 12), 110);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.5 + 0.5,
          baseAlpha: Math.random() * 0.5 + 0.15,
          twinkleSpeed: Math.random() * 0.025 + 0.008,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }

      // 2. Falling Meteors (25 - 32 meteors for vivid continuous shower like arifgiovanni.my.id)
      meteors = [];
      const meteorCount = Math.max(16, Math.min(Math.floor(width / 50), 28));
      for (let i = 0; i < meteorCount; i++) {
        meteors.push(createMeteor(true));
      }
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
      initElements();
    };

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // --- Draw Twinkling Ambient Stars ---
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const currentAlpha =
          star.baseAlpha + Math.sin(tick * star.twinkleSpeed + star.twinkleOffset) * 0.3;
        const clampedAlpha = Math.max(0.08, Math.min(0.9, currentAlpha));

        ctx.fillStyle = `rgba(195, 245, 255, ${clampedAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- Draw Realistic Falling Meteors ---
      for (let i = 0; i < meteors.length; i++) {
        const m = meteors[i];

        const cos = Math.cos(m.angle);
        const sin = Math.sin(m.angle);

        // Advance meteor head down and left
        m.x += cos * m.speed;
        m.y += sin * m.speed;

        // Tail starts from head backwards (up and right)
        const tailX = m.x - cos * m.length;
        const tailY = m.y - sin * m.length;

        // Tail Gradient: Transparent -> Cyan -> White Glow at head
        const gradient = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        gradient.addColorStop(0, "rgba(0, 255, 210, 0)");
        gradient.addColorStop(0.4, `rgba(0, 184, 255, ${m.alpha * 0.25})`);
        gradient.addColorStop(0.75, `rgba(0, 255, 210, ${m.alpha * 0.7})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${m.alpha * 0.95})`);

        // Draw meteor luminous tail
        ctx.save();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = m.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        // Draw soft glowing corona at the meteor head
        const headGlow = ctx.createRadialGradient(
          m.x,
          m.y,
          0,
          m.x,
          m.y,
          m.headGlowSize
        );
        headGlow.addColorStop(0, `rgba(255, 255, 255, ${m.alpha})`);
        headGlow.addColorStop(0.35, `rgba(0, 255, 210, ${m.alpha * 0.75})`);
        headGlow.addColorStop(0.7, `rgba(0, 184, 255, ${m.alpha * 0.3})`);
        headGlow.addColorStop(1, "rgba(0, 255, 210, 0)");

        ctx.fillStyle = headGlow;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.headGlowSize, 0, Math.PI * 2);
        ctx.fill();

        // Sharp bright white hot core at the very tip
        ctx.fillStyle = `rgba(255, 255, 255, ${m.alpha})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, Math.max(0.8, m.width * 0.8), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Respawn when the entire tail has moved off-screen past the bottom or left
        if (tailX < -150 || tailY > height + 150) {
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
      <div className="fixed inset-0 z-0 h-full w-full overflow-hidden pointer-events-none bg-[#020813]">
        {/* Deep cosmic gradient background matching arifgiovanni */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0, 240, 255, 0.08) 0%, transparent 70%), radial-gradient(ellipse 70% 50% at 90% 90%, rgba(0, 160, 255, 0.05) 0%, transparent 60%), #020813",
          }}
        />

        {/* High performance Canvas with screen blend mode */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          style={{ mixBlendMode: "screen" }}
        />

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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </>
  );
}
