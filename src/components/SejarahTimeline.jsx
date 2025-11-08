import React from 'react';

const items = [
  {
    era: 'Pra-Sejarah',
    desc:
      'Jejak peradaban awal: lukisan gua, alat batu, dan migrasi Austronesia yang membentuk keragaman etnis.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    era: 'Kerajaan Nusantara',
    desc:
      'Sriwijaya dan Majapahit mengembangkan maritim dan sastra; aksara, candi, dan sistem pemerintahan berkembang.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    era: 'Pengaruh Lintas Budaya',
    desc:
      'Masuknya Hindu-Buddha, Islam, dan interaksi Tionghoa, Arab, Eropa memperkaya tradisi dan seni.',
    color: 'from-sky-500 to-indigo-500',
  },
  {
    era: 'Pergerakan Nasional',
    desc:
      'Kebangkitan rasa kebangsaan: Budi Utomo, Sumpah Pemuda, hingga proklamasi kemerdekaan 1945.',
    color: 'from-rose-500 to-pink-500',
  },
];

const SejarahTimeline = () => {
  return (
    <section id="sejarah" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Sejarah Singkat</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Kilas balik perjalanan panjang yang membentuk identitas budaya Indonesia.
        </p>

        <div className="mt-10 relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-0.5 h-full bg-slate-200"></div>
          <div className="space-y-10">
            {items.map((it, i) => (
              <div key={i} className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className={`hidden sm:block sm:col-span-1 ${i % 2 === 0 ? '' : 'order-2'}`}></div>
                <div className={`relative sm:col-span-1 ${i % 2 === 0 ? '' : 'order-1'}`}>
                  <div className="absolute -left-10 sm:-left-6 top-2 h-4 w-4 rounded-full bg-white ring-4 ring-slate-200"></div>
                  <div className={`rounded-xl p-5 bg-white shadow-sm ring-1 ring-black/5`}>
                    <span className={`inline-block text-xs font-semibold text-white rounded-full px-2 py-1 bg-gradient-to-r ${it.color}`}>
                      {it.era}
                    </span>
                    <p className="mt-3 text-slate-700 leading-relaxed">{it.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SejarahTimeline;
