
import React, { useState } from 'react';
import { fetchKidFriendlyDrugInfo } from '../services/geminiService';
import { KidFriendlyDrugInfo, LoadingState } from '../types';
import Prescribly from './Prescribly';

const DrugExplorer: React.FC = () => {
  const [query, setQuery] = useState('');
  const [drugData, setDrugData] = useState<KidFriendlyDrugInfo | null>(null);
  const [loading, setLoading] = useState<LoadingState>(LoadingState.IDLE);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    { label: 'Germ Fighters', icon: '🦠', query: 'Antibiotics', color: 'bg-teal-100 text-teal-800' },
    { label: 'Pain Relievers', icon: '⚡', query: 'NSAIDs', color: 'bg-blue-100 text-blue-800' },
    { label: 'Breathing Buddies', icon: '🫁', query: 'Asthma inhalers', color: 'bg-indigo-100 text-indigo-800' },
    { label: 'Medical Heroes', icon: '🦸', query: 'Insulin', color: 'bg-orange-100 text-orange-800' }
  ];

  const handleSearch = async (e: React.FormEvent | string) => {
    const searchTerm = typeof e === 'string' ? e : query;
    if (typeof e !== 'string') e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(LoadingState.LOADING);
    setError(null);
    try {
      const data = await fetchKidFriendlyDrugInfo(searchTerm);
      setDrugData(data);
      setLoading(LoadingState.SUCCESS);
      window.scrollTo({ top: document.getElementById('search-results')?.offsetTop || 0, behavior: 'smooth' });
    } catch (err) {
      setError("Oops! We couldn't find that one. Check your spelling!");
      setLoading(LoadingState.ERROR);
    }
  };

  return (
    <section id="explore" className="py-24 px-6 animate-fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
          <div className="flex flex-col items-center">
            <Prescribly action="labcoat" size="md" />
            <span className="mt-2 text-xs font-black uppercase text-slate-400 tracking-widest">Clinical Research</span>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Medication Explorer</h2>
            <p className="text-xl font-bold text-teal-600">"Professional science for the curious student."</p>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(cat.query);
                handleSearch(cat.query);
              }}
              className={`flex items-center gap-3 px-6 py-4 rounded-3xl font-black text-sm transition-all shadow-md active:scale-95 border-4 border-white hover:shadow-lg ${cat.color}`}
            >
              <span className="text-2xl">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSearch} className="relative mb-16 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Search any medicine (e.g., Amoxicillin)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-24 pl-10 pr-44 text-2xl font-black bg-white border-4 border-slate-100 rounded-[3rem] focus:border-teal-400 shadow-xl outline-none transition-all placeholder:text-slate-300"
          />
          <button
            type="submit"
            disabled={loading === LoadingState.LOADING}
            className="absolute right-3 top-3 bottom-3 px-10 bg-teal-600 text-white rounded-[2.5rem] font-black text-xl hover:bg-teal-700 transition-all shadow-lg active:scale-95 disabled:bg-slate-300"
          >
            {loading === LoadingState.LOADING ? 'Analyzing...' : 'Search'}
          </button>
        </form>

        <div id="search-results">
          {error && (
            <div className="p-12 bg-rose-50 text-rose-600 rounded-[4rem] border-8 border-white text-center mb-12 font-black text-xl shadow-xl">
              {error}
            </div>
          )}

          {loading === LoadingState.SUCCESS && drugData && (
            <div className="bg-white p-12 md:p-20 rounded-[5rem] border-8 border-teal-50 shadow-2xl animate-fade-up">
              <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16 border-b-8 border-slate-50 pb-16">
                <div>
                  <span className="inline-block px-6 py-2 bg-teal-600 text-white text-sm font-black uppercase tracking-[0.2em] rounded-2xl mb-6">
                    {drugData.categoryName}
                  </span>
                  <h3 className="text-6xl md:text-8xl font-black text-slate-900 leading-tight">{drugData.name}</h3>
                </div>
                <div className="w-40 h-40 bg-teal-50 rounded-[3.5rem] flex items-center justify-center text-7xl shadow-inner border-4 border-white">
                  💊
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-20">
                <div className="space-y-16">
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl">🔬</span>
                      <h4 className="text-3xl font-black text-teal-700 underline decoration-teal-100 decoration-8 underline-offset-4">How It Works</h4>
                    </div>
                    <p className="text-2xl leading-relaxed text-slate-700 font-bold">
                      {drugData.superpower}
                    </p>
                  </section>
                  
                  <section className="p-10 bg-rose-50 rounded-[3rem] border-4 border-rose-100 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 text-6xl opacity-10 rotate-12">⚠️</div>
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <span className="text-4xl">🛑</span>
                      <h4 className="text-3xl font-black text-rose-600">Safety & Overdose Facts</h4>
                    </div>
                    <p className="text-xl leading-relaxed text-rose-800 font-black relative z-10">
                      {drugData.overdoseFacts}
                    </p>
                  </section>
                </div>

                <div className="space-y-16">
                  <section className="bg-slate-50 p-12 rounded-[4rem] border-4 border-white shadow-lg">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-4xl">📜</span>
                      <h4 className="text-3xl font-black text-indigo-600">The Rulebook</h4>
                    </div>
                    <ul className="space-y-8">
                      {drugData.rulebook.map((rule, idx) => (
                        <li key={idx} className="flex items-start gap-6">
                          <span className="w-12 h-12 shrink-0 bg-white text-indigo-600 border-4 border-indigo-100 rounded-[1.5rem] flex items-center justify-center text-xl font-black shadow-sm">
                            {idx + 1}
                          </span>
                          <span className="text-xl font-black text-slate-600 leading-snug">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                  
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl">🧪</span>
                      <h4 className="text-3xl font-black text-blue-700">Clinical Context</h4>
                    </div>
                    <p className="text-2xl leading-relaxed text-slate-700 font-bold italic opacity-80">
                      {drugData.originStory}
                    </p>
                  </section>
                </div>
              </div>

              <div className="mt-16 p-12 bg-indigo-600 text-white rounded-[4rem] flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 text-8xl opacity-10 rotate-12">🧠</div>
                 <div className="text-6xl bg-white/20 p-8 rounded-[3rem]">🌟</div>
                 <div className="flex-1 text-center md:text-left relative z-10">
                   <h5 className="text-lg font-black uppercase tracking-[0.4em] opacity-80 mb-4">Science Trivia</h5>
                   <p className="text-3xl font-black italic leading-tight">{drugData.coolFact}</p>
                 </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DrugExplorer;
