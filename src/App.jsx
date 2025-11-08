import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SejarahTimeline from './components/SejarahTimeline';
import WarisanGrid from './components/WarisanGrid';
import WilayahExplorer from './components/WilayahExplorer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <SejarahTimeline />
        <WarisanGrid />
        <WilayahExplorer />
      </main>
      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Budaya Nusantara — Menjaga warisan, merayakan keberagaman.
        </div>
      </footer>
    </div>
  );
}

export default App;
