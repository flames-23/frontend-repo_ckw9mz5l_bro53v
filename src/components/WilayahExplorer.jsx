import React, { useMemo, useState } from 'react';

const provinces = [
  { name: 'Aceh', island: 'Sumatra', highlight: 'Tari Saman dan adat Aceh yang kuat' },
  { name: 'Sumatera Barat', island: 'Sumatra', highlight: 'Rumah Gadang dan merantau Minangkabau' },
  { name: 'DKI Jakarta', island: 'Jawa', highlight: 'Ondel-ondel dan Betawi' },
  { name: 'Jawa Barat', island: 'Jawa', highlight: 'Angklung dan Sisingaan' },
  { name: 'Jawa Tengah', island: 'Jawa', highlight: 'Wayang dan Keraton' },
  { name: 'DI Yogyakarta', island: 'Jawa', highlight: 'Gamelan, batik, dan kraton' },
  { name: 'Jawa Timur', island: 'Jawa', highlight: 'Reog Ponorogo dan Ludruk' },
  { name: 'Bali', island: 'Bali-Nusa', highlight: 'Upacara adat dan tari kecak' },
  { name: 'NTB', island: 'Bali-Nusa', highlight: 'Tenun dan tradisi Bau Nyale' },
  { name: 'NTT', island: 'Bali-Nusa', highlight: 'Kain ikat dan rumah adat' },
  { name: 'Kalimantan Barat', island: 'Kalimantan', highlight: 'Dayak dan gawai' },
  { name: 'Sulawesi Selatan', island: 'Sulawesi', highlight: 'Phinisi dan adat Bugis-Makassar' },
  { name: 'Papua', island: 'Papua', highlight: 'Noken dan tradisi bakar batu' },
];

const islands = ['Sumatra', 'Jawa', 'Bali-Nusa', 'Kalimantan', 'Sulawesi', 'Papua'];

const WilayahExplorer = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('Semua');

  const filtered = useMemo(() => {
    return provinces.filter((p) => {
      const matchQuery = p.name.toLowerCase().includes(query.toLowerCase());
      const matchIsland = filter === 'Semua' || p.island === filter;
      return matchQuery && matchIsland;
    });
  }, [query, filter]);

  return (
    <section id="wilayah" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Jelajah Wilayah</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">Cari provinsi dan temukan sorotan budayanya.</p>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari provinsi..."
              className="w-56 rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option>Semua</option>
              {islands.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.name} className="rounded-xl bg-white ring-1 ring-black/5 p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">{p.name}</h3>
                <span className="text-xs text-slate-600">{p.island}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{p.highlight}</p>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-slate-500">Tidak ditemukan.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WilayahExplorer;
