import React from 'react';
import { Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {/* Subtle 3D decorative background */}
        <Spline scene="https://prod.spline.design/2Zl3YnU4yXXJJn5R/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 text-amber-700 ring-1 ring-amber-500/20 px-3 py-1 text-sm font-medium">
            <Sparkles size={16} /> Warisan budaya yang mempersatukan
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Jelajah Budaya Nusantara
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Menyusuri jejak sejarah dari Sabang sampai Merauke: tradisi, bahasa, tarian, kuliner, dan kearifan lokal yang membentuk identitas Indonesia.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#sejarah" className="inline-flex items-center justify-center rounded-lg bg-amber-600 text-white px-5 py-3 font-medium hover:bg-amber-700 transition shadow">
              Mulai Menjelajah
            </a>
            <a href="#warisan" className="inline-flex items-center justify-center rounded-lg bg-white text-amber-700 ring-1 ring-amber-600/30 px-5 py-3 font-medium hover:bg-amber-50 transition">
              Lihat Warisan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
