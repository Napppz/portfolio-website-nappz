"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Memberikan waktu loading 1.8 detik sebelum mulai memudar (animasi menghilang)
    const fadeTimer = setTimeout(() => setIsFading(true), 1800);
    
    // Menghilangkan komponen sepenuhnya dari DOM setelah 2.3 detik
    const removeTimer = setTimeout(() => setIsLoading(false), 2300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-500 ease-in-out ${
        isFading ? "opacity-0 -translate-y-8 pointer-events-none" : "opacity-100 translate-y-0"
      }`}
    >
      {/* Animasi Lingkaran Modern */}
      <div className="relative w-20 h-20 mb-6">
        {/* Background Lingkaran */}
        <div className="absolute inset-0 rounded-full border-[3px] border-primary/20"></div>
        
        {/* Loading Spinner berputar */}
        <div className="absolute inset-0 rounded-full border-[3px] border-primary border-t-transparent animate-spin"></div>
      </div>

      {/* Loading animation container */}
      <div className="flex flex-col items-center gap-4 mt-2">
        {/* Tulisan LOADING bersinar */}
        <div className="font-mono text-xl md:text-2xl font-bold tracking-[0.4em] text-[#00f0ff] drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] animate-pulse pl-2">
          LOADING
        </div>
        
        {/* Animasi Titik 3 Melompat */}
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-bounce drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]" style={{ animationDelay: "0ms" }}></span>
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-bounce drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]" style={{ animationDelay: "150ms" }}></span>
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-bounce drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]" style={{ animationDelay: "300ms" }}></span>
        </div>
      </div>
    </div>
  );
}
