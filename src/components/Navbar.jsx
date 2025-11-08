import React from 'react';
import { Book, MapPin, Star } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 ring-1 ring-amber-500/20 group-hover:bg-amber-500/20 transition">
            <MapPin size={18} />
          </span>
          <span className="font-semibold tracking-tight text-slate-900">Budaya Nusantara</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#sejarah" className="text-slate-600 hover:text-slate-900 inline-flex items-center gap-2">
            <Book size={16} /> Sejarah
          </a>
          <a href="#warisan" className="text-slate-600 hover:text-slate-900 inline-flex items-center gap-2">
            <Star size={16} /> Warisan
          </a>
          <a href="#wilayah" className="text-slate-600 hover:text-slate-900">Wilayah</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
