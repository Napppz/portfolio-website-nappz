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
        
        {/* Inisial Nama di Tengah */}
        <div className="absolute inset-0 flex items-center justify-center text-primary font-bold font-mono text-xl animate-pulse">
          RA
        </div>
      </div>

      {/* Teks Loading */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl font-bold tracking-[0.3em] text-foreground font-mono">RIZKI</h2>
        
        {/* Animasi Titik 3 Melompat */}
        <div className="flex gap-1.5 mt-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }}></span>
          <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }}></span>
          <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }}></span>
        </div>
      </div>
    </div>
  );
}
