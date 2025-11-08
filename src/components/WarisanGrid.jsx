import React from 'react';

const data = [
  {
    title: 'Batik',
    region: 'Jawa',
    desc: 'Motif simbolik sarat makna filosofi, diakui UNESCO sebagai Warisan Budaya Takbenda.',
    img: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Tari Saman',
    region: 'Aceh',
    desc: 'Gerak kompak dan syair dakwah mencerminkan kebersamaan dan disiplin.',
    img: 'https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Angklung',
    region: 'Sunda',
    desc: 'Instrumen bambu bernada yang dimainkan berkelompok; harmoni lahir dari kolaborasi.',
    img: 'https://images.unsplash.com/photo-1569470451070-c35fa1b36d80?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Wayang',
    region: 'Nusantara',
    desc: 'Seni pertunjukan cerita epos yang menyampaikan nilai moral dan spiritual.',
    img: 'https://images.unsplash.com/photo-1588593309406-7ce9f0b7656d?q=80&w=1600&auto=format&fit=crop',
  },
];

const WarisanGrid = () => {
  return (
    <section id="warisan" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Warisan Budaya</h2>
            <p className="mt-2 text-slate-600">Rangkaian karya dan tradisi yang memperkaya jati diri bangsa.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((card) => (
            <article key={card.title} className="group rounded-xl bg-white ring-1 ring-black/5 shadow-sm overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={card.img} alt={card.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{card.title}</h3>
                  <span className="text-xs text-amber-700 bg-amber-100 rounded px-2 py-0.5">{card.region}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WarisanGrid;
