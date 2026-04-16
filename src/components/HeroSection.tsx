'use client';

import { useState } from 'react';
import { portfolioInfo } from '@/data/portfolio';

export function HeroSection() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          {portfolioInfo.headline}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
          {portfolioInfo.tagline}
        </p>
        <button
          onClick={() => setIsStarted(true)}
          className="px-8 py-3 border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 mb-8"
        >
          {portfolioInfo.cta}
        </button>
        {isStarted && (
          <div className="mt-8 animate-bounce">
            <p className="text-gray-400">↓ Scroll down to explore ↓</p>
          </div>
        )}
      </div>
    </section>
  );
}
