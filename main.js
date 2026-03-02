
import React, { createElement as e, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleGenAI, Type } from "@google/genai";

/**
 * PRODUCTION BUNDLE - VANILLA JAVASCRIPT
 * This file contains the entire Project Prescribe application logic
 * converted to browser-executable JavaScript without JSX.
 */

// --- Constants & Types ---
const LoadingState = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};

// --- Gemini Service ---
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const fetchKidFriendlyDrugInfo = async (drugName) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Explain the medicine "${drugName}" for highly curious 10-14 year olds. 
    Role: You are a professional medical educator partnering with SALSA (Students Advocating for Life without Substance Abuse).
    
    - The "superpower" should explain the physiological mechanism using a simple metaphor but accurate biological concepts (like receptors and keys).
    - The "originStory" should provide a brief scientific or historical context.
    - The "rulebook" should be clear, professional safety rules.
    - The "categoryName" should be a professional yet catchy category.
    - The "overdoseFacts" is CRITICAL: Explain exactly what happens to the body's systems (liver, heart, breathing, etc.) if too much of this specific medication is taken or if it is misused. Be factual and serious.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          categoryName: { type: Type.STRING },
          superpower: { type: Type.STRING },
          originStory: { type: Type.STRING },
          rulebook: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          coolFact: { type: Type.STRING },
          overdoseFacts: { type: Type.STRING }
        },
        required: ["name", "categoryName", "superpower", "originStory", "rulebook", "coolFact", "overdoseFacts"]
      }
    }
  });

  const jsonStr = response.text.trim();
  return JSON.parse(jsonStr);
};

// --- Components ---

const Prescribly = ({ action = 'bounce', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-12 h-16',
    md: 'w-24 h-32',
    lg: 'w-48 h-64'
  };

  return e('div', { className: `relative flex flex-col items-center justify-center ${sizeClasses[size]} ${action === 'wave' ? 'prescribly-wiggle' : 'prescribly-bounce'}` },
    e('div', { className: "relative w-full h-full flex items-center justify-center" },
      e('div', { className: "absolute inset-0 bg-teal-200/30 blur-3xl rounded-full scale-110" }),
      e('div', { className: "relative w-full h-full bg-white rounded-full border-[6px] border-teal-600 shadow-2xl overflow-hidden flex flex-col z-10" },
        e('div', { className: "w-full h-1/2 bg-teal-500 flex items-center justify-center border-b-4 border-teal-600" },
          e('div', { className: "flex gap-4" },
            e('div', { className: "w-3 h-3 bg-white rounded-full animate-pulse" }),
            e('div', { className: "w-3 h-3 bg-white rounded-full animate-pulse" })
          )
        ),
        e('div', { className: "w-full h-1/2 bg-white flex items-center justify-center" },
          e('div', { className: "w-8 h-4 border-b-4 border-teal-600 rounded-full" })
        )
      ),
      action === 'helmet' && e('div', { className: "absolute -top-4 -left-2 -right-2 h-1/3 bg-rose-600 rounded-t-full border-b-4 border-rose-800 z-20 flex items-center justify-center shadow-lg" },
        e('div', { className: "w-1/2 h-1 bg-white/30 rounded-full" })
      ),
      action === 'labcoat' && e('div', { className: "absolute inset-x-0 bottom-0 h-1/2 flex z-15 pointer-events-none" },
        e('div', { className: "w-1/2 h-full bg-slate-50 border-r-2 border-slate-200 rounded-bl-full" }),
        e('div', { className: "w-1/2 h-full bg-slate-50 border-l-2 border-slate-200 rounded-br-full" })
      ),
      action === 'shield' && e('div', { className: "absolute -left-6 bottom-8 w-14 h-14 bg-teal-600 border-4 border-white rounded-2xl flex items-center justify-center text-white text-2xl font-black z-30 shadow-xl rotate-[-15deg]" }, "🛡️"),
      action === 'wave' && e('div', { className: "absolute -right-6 top-1/2 w-10 h-10 bg-teal-500 border-4 border-white rounded-full flex items-center justify-center text-xl z-30 shadow-lg animate-bounce" }, "👋")
    )
  );
};

const Navbar = ({ activeView, setActiveView }) => {
  const btnClass = (view, color) => `flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm transition-all shadow-lg active:scale-95 ${activeView === view ? `${color} text-white scale-105` : `bg-white ${color.replace('bg-', 'text-')} hover:bg-slate-50`}`;

  return e('nav', { className: "fixed top-0 left-0 right-0 z-50 p-4" },
    e('div', { className: "max-w-7xl mx-auto flex flex-wrap justify-center gap-3" },
      e('button', { onClick: () => setActiveView('home'), className: btnClass('home', 'bg-blue-500') }, e('span', null, '🏠'), ' Home'),
      e('button', { onClick: () => setActiveView('explore'), className: btnClass('explore', 'bg-teal-500') }, e('span', null, '🔍'), ' Explorer'),
      e('button', { onClick: () => setActiveView('weekly'), className: btnClass('weekly', 'bg-yellow-400') }, e('span', null, '🌟'), ' Med of the Week'),
      e('button', { onClick: () => setActiveView('salsa'), className: btnClass('salsa', 'bg-indigo-600') }, e('span', null, '🛡️'), ' SALSA Safety'),
      e('button', { onClick: () => setActiveView('emergency'), className: `flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm transition-all shadow-xl active:scale-95 animate-pulse border-4 border-rose-500 ${activeView === 'emergency' ? 'bg-rose-600 text-white scale-105' : 'bg-rose-500 text-white hover:bg-rose-600'}` }, e('span', null, '🚨'), ' EMERGENCY')
    )
  );
};

const Hero = ({ onStartClick }) => {
  return e('section', { className: "pt-24 pb-24 px-6" },
    e('div', { className: "max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 text-center lg:text-left" },
      e('div', { className: "flex-1" },
        e('div', { className: "inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-teal-50 border-2 border-teal-100 text-teal-700 text-sm font-black mb-8" }, "🚀 Learning is the best medicine!"),
        e('h1', { className: "text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1]" }, "Prescribing ", e('span', { className: "text-teal-600" }, "Knowledge"), ", ", e('br'), "Promoting ", e('span', { className: "text-orange-500 underline decoration-orange-200 decoration-8 underline-offset-4" }, "Safety.")),
        e('p', { className: "text-xl md:text-2xl text-slate-600 max-w-2xl lg:mx-0 mx-auto mb-12 leading-relaxed font-bold" }, "Hi! We're Dylan and Ved. Welcome to our student project designed to keep Needham healthy and informed!"),
        e('div', { className: "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6" },
          e('button', { onClick: onStartClick, className: "w-full sm:w-auto px-10 py-5 bg-teal-600 text-white font-black text-xl rounded-[2rem] hover:bg-teal-700 transition-all shadow-xl shadow-teal-100 active:scale-95" }, "Start Exploring!"),
          e('a', { href: "#about", className: "w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border-4 border-slate-100 font-black text-xl rounded-[2rem] hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center" }, "Meet Dylan & Ved")
        )
      ),
      e('div', { className: "flex-shrink-0 flex flex-col items-center" },
        e(Prescribly, { action: "wave", size: "lg" }),
        e('div', { className: "mt-4 bg-white px-8 py-3 rounded-[2rem] shadow-xl border-4 border-teal-50 font-black text-teal-600 text-2xl relative" },
          e('div', { className: "absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-b-white" }),
          "Welcome! I'm Prescribly!"
        )
      )
    )
  );
};

const SafetyBar = () => {
  return e('section', { id: "safety", className: "py-6 px-4 bg-orange-500 text-white" },
    e('div', { className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left" },
      e('div', { className: "flex items-center gap-4" },
        e('div', { className: "w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl" }, "⚠️"),
        e('div', null, e('h2', { className: "text-xl font-black" }, "Safety First: Opioid Awareness"), e('p', { className: "text-sm font-bold opacity-90" }, "Only take medicine from a trusted adult. Never share!"))
      ),
      e('div', { className: "h-px w-24 bg-white/20 hidden md:block" }),
      e('div', null, e('h2', { className: "text-xl font-black" }, "Safe Disposal"), e('p', { className: "text-sm font-bold opacity-90" }, "Old medicine should go to a \"Take-Back\" box, not the trash."))
    )
  );
};

const DrugExplorer = () => {
  const [query, setQuery] = useState('');
  const [drugData, setDrugData] = useState(null);
  const [loading, setLoading] = useState(LoadingState.IDLE);
  const [error, setError] = useState(null);

  const categories = [
    { label: 'Germ Fighters', icon: '🦠', query: 'Antibiotics', color: 'bg-teal-100 text-teal-800' },
    { label: 'Pain Relievers', icon: '⚡', query: 'NSAIDs', color: 'bg-blue-100 text-blue-800' },
    { label: 'Breathing Buddies', icon: '🫁', query: 'Asthma inhalers', color: 'bg-indigo-100 text-indigo-800' },
    { label: 'Medical Heroes', icon: '🦸', query: 'Insulin', color: 'bg-orange-100 text-orange-800' }
  ];

  const handleSearch = async (eArg) => {
    const searchTerm = typeof eArg === 'string' ? eArg : query;
    if (typeof eArg !== 'string') eArg.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(LoadingState.LOADING);
    setError(null);
    try {
      const data = await fetchKidFriendlyDrugInfo(searchTerm);
      setDrugData(data);
      setLoading(LoadingState.SUCCESS);
      const resultsEl = document.getElementById('search-results');
      if (resultsEl) window.scrollTo({ top: resultsEl.offsetTop, behavior: 'smooth' });
    } catch (err) {
      setError("Oops! We couldn't find that one. Check your spelling!");
      setLoading(LoadingState.ERROR);
    }
  };

  return e('section', { id: "explore", className: "py-24 px-6 animate-fade-up" },
    e('div', { className: "max-w-5xl mx-auto" },
      e('div', { className: "flex flex-col md:flex-row items-center justify-center gap-12 mb-16" },
        e('div', { className: "flex flex-col items-center" }, e(Prescribly, { action: "labcoat", size: "md" }), e('span', { className: "mt-2 text-xs font-black uppercase text-slate-400 tracking-widest" }, "Clinical Research")),
        e('div', { className: "text-center md:text-left" }, e('h2', { className: "text-5xl font-black text-slate-900 mb-4 tracking-tight" }, "Medication Explorer"), e('p', { className: "text-xl font-bold text-teal-600" }, "\"Professional science for the curious student.\""))
      ),
      e('div', { className: "flex flex-wrap justify-center gap-4 mb-12" },
        categories.map((cat, idx) => e('button', { key: idx, onClick: () => { setQuery(cat.query); handleSearch(cat.query); }, className: `flex items-center gap-3 px-6 py-4 rounded-3xl font-black text-sm transition-all shadow-md active:scale-95 border-4 border-white hover:shadow-lg ${cat.color}` }, e('span', { className: "text-2xl" }, cat.icon), cat.label))
      ),
      e('form', { onSubmit: handleSearch, className: "relative mb-16 max-w-3xl mx-auto" },
        e('input', { type: "text", placeholder: "Search any medicine (e.g., Amoxicillin)...", value: query, onChange: (ev) => setQuery(ev.target.value), className: "w-full h-24 pl-10 pr-44 text-2xl font-black bg-white border-4 border-slate-100 rounded-[3rem] focus:border-teal-400 shadow-xl outline-none transition-all placeholder:text-slate-300" }),
        e('button', { type: "submit", disabled: loading === LoadingState.LOADING, className: "absolute right-3 top-3 bottom-3 px-10 bg-teal-600 text-white rounded-[2.5rem] font-black text-xl hover:bg-teal-700 transition-all shadow-lg active:scale-95 disabled:bg-slate-300" }, loading === LoadingState.LOADING ? 'Analyzing...' : 'Search')
      ),
      e('div', { id: "search-results" },
        error && e('div', { className: "p-12 bg-rose-50 text-rose-600 rounded-[4rem] border-8 border-white text-center mb-12 font-black text-xl shadow-xl" }, error),
        loading === LoadingState.SUCCESS && drugData && e('div', { className: "bg-white p-12 md:p-20 rounded-[5rem] border-8 border-teal-50 shadow-2xl animate-fade-up" },
          e('div', { className: "flex flex-col md:flex-row justify-between items-start gap-10 mb-16 border-b-8 border-slate-50 pb-16" },
            e('div', null, e('span', { className: "inline-block px-6 py-2 bg-teal-600 text-white text-sm font-black uppercase tracking-[0.2em] rounded-2xl mb-6" }, drugData.categoryName), e('h3', { className: "text-6xl md:text-8xl font-black text-slate-900 leading-tight" }, drugData.name)),
            e('div', { className: "w-40 h-40 bg-teal-50 rounded-[3.5rem] flex items-center justify-center text-7xl shadow-inner border-4 border-white" }, "💊")
          ),
          e('div', { className: "grid md:grid-cols-2 gap-20" },
            e('div', { className: "space-y-16" },
              e('section', null, e('div', { className: "flex items-center gap-4 mb-6" }, e('span', { className: "text-4xl" }, "🔬"), e('h4', { className: "text-3xl font-black text-teal-700 underline decoration-teal-100 decoration-8 underline-offset-4" }, "How It Works")), e('p', { className: "text-2xl leading-relaxed text-slate-700 font-bold" }, drugData.superpower)),
              e('section', { className: "p-10 bg-rose-50 rounded-[3rem] border-4 border-rose-100 shadow-xl relative overflow-hidden" }, e('div', { className: "absolute top-0 right-0 p-4 text-6xl opacity-10 rotate-12" }, "⚠️"), e('div', { className: "flex items-center gap-4 mb-6 relative z-10" }, e('span', { className: "text-4xl" }, "🛑"), e('h4', { className: "text-3xl font-black text-rose-600" }, "Safety & Overdose Facts")), e('p', { className: "text-xl leading-relaxed text-rose-800 font-black relative z-10" }, drugData.overdoseFacts))
            ),
            e('div', { className: "space-y-16" },
              e('section', { className: "bg-slate-50 p-12 rounded-[4rem] border-4 border-white shadow-lg" }, e('div', { className: "flex items-center gap-4 mb-8" }, e('span', { className: "text-4xl" }, "📜"), e('h4', { className: "text-3xl font-black text-indigo-600" }, "The Rulebook")), e('ul', { className: "space-y-8" }, drugData.rulebook.map((rule, idx) => e('li', { key: idx, className: "flex items-start gap-6" }, e('span', { className: "w-12 h-12 shrink-0 bg-white text-indigo-600 border-4 border-indigo-100 rounded-[1.5rem] flex items-center justify-center text-xl font-black shadow-sm" }, idx + 1), e('span', { className: "text-xl font-black text-slate-600 leading-snug" }, rule))))),
              e('section', null, e('div', { className: "flex items-center gap-4 mb-6" }, e('span', { className: "text-4xl" }, "🧪"), e('h4', { className: "text-3xl font-black text-blue-700" }, "Clinical Context")), e('p', { className: "text-2xl leading-relaxed text-slate-700 font-bold italic opacity-80" }, drugData.originStory))
            )
          ),
          e('div', { className: "mt-16 p-12 bg-indigo-600 text-white rounded-[4rem] flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden" }, e('div', { className: "absolute top-0 right-0 p-8 text-8xl opacity-10 rotate-12" }, "🧠"), e('div', { className: "text-6xl bg-white/20 p-8 rounded-[3rem]" }, "🌟"), e('div', { className: "flex-1 text-center md:text-left relative z-10" }, e('h5', { className: "text-lg font-black uppercase tracking-[0.4em] opacity-80 mb-4" }, "Science Trivia"), e('p', { className: "text-3xl font-black italic leading-tight" }, drugData.coolFact)))
        )
      )
    )
  );
};

const AboutUs = () => {
  return e('section', { id: "about", className: "py-24 px-6 bg-white rounded-t-[5rem] mt-12" },
    e('div', { className: "max-w-6xl mx-auto" },
      e('div', { className: "text-center mb-16" },
        e('h2', { className: "text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight" }, "Meet Our Founders"),
        e('p', { className: "text-xl font-bold text-slate-600 max-w-3xl mx-auto italic leading-relaxed" }, "\"We are dedicated students from Needham High School and members of SALSA. Our mission is to ensure that every student has free, easy-to-understand, and life-saving information about medications and the realities of overdose. We believe knowledge is the best tool for prevention.\"")
      ),
      e('div', { className: "flex flex-col md:flex-row items-center justify-center gap-16" },
        e('div', { className: "flex flex-col items-center group" },
          e('div', { className: "relative mb-6" }, e('div', { className: "absolute inset-0 bg-teal-100 rounded-full scale-110 group-hover:rotate-12 transition-transform" }), e('div', { className: "w-64 h-64 rounded-full border-8 border-white shadow-2xl overflow-hidden relative z-10 bg-teal-500 flex items-center justify-center" }, e('span', { className: "text-8xl font-black text-white" }, "D"))),
          e('h3', { className: "text-3xl font-black text-slate-900" }, "Dylan"), e('span', { className: "text-teal-600 font-black uppercase tracking-widest text-sm" }, "NHS Student & SALSA Leader")
        ),
        e('div', { className: "flex flex-col items-center group" },
          e('div', { className: "relative mb-6" }, e('div', { className: "absolute inset-0 bg-orange-100 rounded-full scale-110 group-hover:-rotate-12 transition-transform" }), e('div', { className: "w-64 h-64 rounded-full border-8 border-white shadow-2xl overflow-hidden relative z-10 bg-orange-500 flex items-center justify-center" }, e('span', { className: "text-8xl font-black text-white" }, "V"))),
          e('h3', { className: "text-3xl font-black text-slate-900" }, "Ved"), e('span', { className: "text-orange-600 font-black uppercase tracking-widest text-sm" }, "NHS Student & SALSA Leader")
        )
      ),
      e('div', { className: "mt-20 max-w-4xl mx-auto bg-slate-50 p-12 rounded-[4rem] border-4 border-slate-100" },
        e('div', { className: "space-y-6 text-xl font-bold text-slate-600 leading-relaxed text-center" },
          e('p', null, "Project Prescribe was founded at Needham High School to bridge the gap between complex pharmacology and community safety. As active members of ", e('strong', null, "SALSA (Students Advocating for Life without Substance Abuse)"), ", we are committed to providing the clinical honesty required to prevent medicine misuse."),
          e('div', { className: "h-1 w-24 bg-teal-200 mx-auto my-8 rounded-full" }),
          e('p', { className: "text-teal-700 font-black uppercase tracking-widest text-sm" }, "Science for Safety • Needham, MA")
        )
      )
    )
  );
};

const MedicationOfTheWeek = () => {
  return e('div', { className: "py-24 px-6 max-w-7xl mx-auto animate-fade-up" },
    e('div', { className: "text-center mb-16" }, e('h2', { className: "text-4xl md:text-6xl font-black text-slate-900 tracking-tight" }, "Medication ", e('span', { className: "text-teal-600" }, "of the Week")), e('p', { className: "text-xl font-bold text-slate-500 mt-4 italic" }, "Pharmacology & Body Science with Prescribly")),
    e('div', { className: "flex flex-col xl:flex-row gap-12 items-stretch" },
      e('div', { className: "flex flex-col items-center justify-center bg-white p-8 rounded-[4rem] border-8 border-teal-50 shadow-xl xl:w-1/4" }, e(Prescribly, { action: "wave", size: "lg" }), e('div', { className: "mt-8 bg-teal-600 text-white p-6 rounded-3xl font-black text-center shadow-lg relative" }, e('div', { className: "absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-teal-600" }), "\"Welcome to the Lab! Let's analyze the biological journey of Penicillin.\"")),
      e('div', { className: "flex-1 bg-white p-10 md:p-14 rounded-[4rem] border-8 border-slate-50 shadow-2xl relative overflow-hidden" },
        e('div', { className: "absolute top-0 right-0 p-8 text-9xl opacity-5 pointer-events-none font-black uppercase" }, "Bio Science"),
        e('div', { className: "relative z-10 space-y-12" },
          e('section', null, e('h3', { className: "text-3xl font-black text-teal-700 mb-6 flex items-center gap-4" }, e('span', { className: "bg-teal-100 p-3 rounded-2xl text-2xl" }, "🔬"), "How It Works: The Journey"),
            e('div', { className: "text-xl font-bold text-slate-600 leading-relaxed space-y-6" },
              e('div', null, e('h4', { className: "text-teal-600 uppercase text-sm tracking-widest mb-2 font-black" }, "1. Absorption (The Entry)"), e('p', null, "When taken orally, Penicillin is absorbed through the stomach lining and small intestine into the bloodstream.")),
              e('div', null, e('h4', { className: "text-teal-600 uppercase text-sm tracking-widest mb-2 font-black" }, "2. Distribution (The Traveling Key)"), e('p', null, "The circulatory system distributes the medicine throughout the body. Penicillin molecules act like specialized \"keys\" that seek out bacterial cell walls.")),
              e('div', null, e('h4', { className: "text-teal-600 uppercase text-sm tracking-widest mb-2 font-black" }, "3. Elimination (The Cleanup)"), e('p', null, "Once the task is complete, the kidneys eliminate the medicine from the blood through filtration."))
            )
          ),
          e('section', { className: "p-10 bg-rose-50 rounded-[3rem] border-4 border-rose-100 shadow-xl" },
            e('h3', { className: "text-3xl font-black text-rose-600 mb-6 flex items-center gap-4" }, e('span', { className: "bg-rose-100 p-3 rounded-2xl text-2xl" }, "🚨"), "Safety & Overdose Facts"),
            e('p', { className: "text-xl font-bold text-rose-800 leading-relaxed font-black" }, "While Penicillin is a life-saver, taking too much can overwhelm your body's systems. An overdose can cause seizures or severe allergic reactions known as anaphylaxis.")
          )
        )
      ),
      e('div', { className: "xl:w-1/3 space-y-8" },
        e('div', { className: "bg-yellow-400 p-10 rounded-[4rem] shadow-xl border-8 border-yellow-300" }, e('h4', { className: "text-2xl font-black text-slate-900 mb-8 uppercase tracking-widest flex items-center gap-3" }, e('span', null, "📊"), "Data Sheet"),
          e('div', { className: "space-y-6" },
            e('div', { className: "bg-white/40 p-4 rounded-2xl border-2 border-white/60" }, e('span', { className: "block text-xs font-black uppercase text-slate-700 opacity-60" }, "Scientific Class"), e('span', { className: "text-xl font-black text-slate-900" }, "Beta-lactam Antibiotic")),
            e('div', { className: "bg-white/40 p-4 rounded-2xl border-2 border-white/60" }, e('span', { className: "block text-xs font-black uppercase text-slate-700 opacity-60" }, "Cellular Target"), e('span', { className: "text-xl font-black text-slate-900" }, "Peptidoglycan Synthesis"))
          )
        ),
        e('div', { className: "bg-slate-900 p-10 rounded-[4rem] text-white shadow-2xl relative overflow-hidden" }, e('h4', { className: "text-2xl font-black mb-8 uppercase tracking-widest" }, "Safety Protocol"),
          e('ul', { className: "space-y-6" },
            e('li', { className: "flex items-start gap-4" }, e('div', { className: "w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center font-black shrink-0" }, "1"), e('div', null, e('span', { className: "block font-black text-teal-400" }, "Trusted Adults Only"), e('span', { className: "text-sm font-bold opacity-80" }, "Never take medication unless it is handed to you by a doctor or a trusted parent."))),
            e('li', { className: "flex items-start gap-4" }, e('div', { className: "w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center font-black shrink-0" }, "2"), e('div', null, e('span', { className: "block font-black text-blue-400" }, "No Sharing"), e('span', { className: "text-sm font-bold opacity-80" }, "Medicines are prescribed for YOUR unique body chemistry. Sharing is dangerous.")))
          )
        )
      )
    )
  );
};

const EmergencyHub = () => {
  return e('div', { className: "animate-fade-up" },
    e('section', { className: "py-24 bg-rose-600 text-white text-center rounded-b-[6rem] shadow-2xl border-b-[12px] border-rose-700" },
      e('div', { className: "max-w-4xl mx-auto px-6" },
        e('div', { className: "w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-5xl mx-auto mb-10 animate-pulse" }, "🚨"),
        e('h2', { className: "text-5xl md:text-7xl font-black mb-8 tracking-tight text-white" }, "Emergency Hub"),
        e('div', { className: "p-10 bg-white rounded-[3.5rem] border-8 border-rose-800 shadow-2xl" }, e('h3', { className: "text-rose-600 text-3xl font-black mb-6" }, "CRITICAL WARNING:"), e('p', { className: "text-2xl font-black text-rose-700 leading-tight" }, "If this is a medical emergency right now, call 911 immediately."))
      )
    ),
    e('section', { className: "py-24 px-6 max-w-7xl mx-auto" },
      e('div', { className: "grid lg:grid-cols-2 gap-16 items-start" },
        e('div', { className: "space-y-12" },
          e('div', { className: "bg-white p-12 rounded-[4rem] border-8 border-indigo-50 shadow-2xl" },
            e('div', { className: "flex items-center gap-6 mb-8" }, e('div', { className: "w-20 h-20 bg-indigo-600 text-white rounded-3xl flex items-center justify-center text-4xl shadow-lg" }, "🧬"), e('h3', { className: "text-4xl font-black text-slate-900" }, "The Science of Narcan")),
            e('p', { className: "text-xl font-bold text-slate-600 leading-relaxed mb-8" }, "Narcan (Naloxone) is a life-saving medicine that can reverse an opioid overdose in minutes."),
            e('div', { className: "bg-indigo-50 p-8 rounded-[3rem] border-4 border-white shadow-inner" }, e('h4', { className: "text-2xl font-black text-indigo-700 mb-4" }, "The \"Key Displacement\" Strategy"), e('p', { className: "text-lg font-bold text-slate-700 leading-relaxed" }, "Narcan acts like a much stronger key that kicks the opioid keys out of the locks and sits there, holding the lock open."))
          )
        ),
        e('div', { className: "bg-slate-900 text-white p-12 md:p-16 rounded-[5rem] shadow-2xl border-[12px] border-slate-800" },
          e('h3', { className: "text-4xl font-black mb-12 text-center underline decoration-rose-500 decoration-8 underline-offset-8" }, "How to Use Narcan"),
          e('div', { className: "space-y-10" },
            e('div', { className: "flex gap-8" }, e('div', { className: "w-14 h-14 bg-rose-500 rounded-2xl flex items-center justify-center text-2xl font-black shrink-0 shadow-lg" }, "1"), e('div', null, e('h4', { className: "text-2xl font-black text-rose-400 mb-2" }, "Check & Call"), e('p', { className: "text-lg font-bold opacity-80" }, "Shout and rub the middle of their chest. If they don't wake up, Call 911."))),
            e('div', { className: "flex gap-8" }, e('div', { className: "w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-2xl font-black shrink-0 shadow-lg" }, "3"), e('div', null, e('h4', { className: "text-2xl font-black text-blue-400 mb-2" }, "Spray Gently"), e('p', { className: "text-lg font-bold opacity-80" }, "Insert the tip into a nostril and Press the plunger firmly.")))
          )
        )
      )
    )
  );
};

const SalsaSafety = () => {
  const [showBrainFact, setShowBrainFact] = useState(false);
  return e('div', { className: "py-24 px-6 max-w-6xl mx-auto animate-fade-up" },
    e('div', { className: "bg-indigo-900 text-white rounded-[4rem] p-12 md:p-20 shadow-2xl relative overflow-hidden mb-16" },
      e('div', { className: "absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-32 -mt-32" }),
      e('div', { className: "relative z-10" },
        e('div', { className: "inline-block px-6 py-2 bg-indigo-500 rounded-full font-black text-xs uppercase tracking-widest mb-6 border border-white/20" }, "Official SALSA Partnership"),
        e('h2', { className: "text-4xl md:text-6xl font-black mb-8 tracking-tight" }, "The SALSA Safety Zone"),
        e('p', { className: "text-2xl font-bold opacity-90 leading-relaxed max-w-3xl mb-12" }, "Empowering Needham students with the science to advocate for a life without substance abuse."),
        e('div', { className: "grid md:grid-cols-2 gap-12" },
          e('div', { className: "bg-white/10 p-10 rounded-[3rem] border-2 border-white/20 hover:bg-white/15 transition-all" }, e('h3', { className: "text-3xl font-black mb-6 flex items-center gap-3" }, e('span', { className: "text-4xl" }, "🛠️"), "Tools vs. Toxins"), e('p', { className: "text-lg opacity-80 leading-relaxed font-bold" }, "Medications are chemical tools designed to fix specific biological issues.")),
          e('div', { className: "bg-rose-500/20 p-10 rounded-[3rem] border-2 border-rose-500/30 hover:bg-rose-500/25 transition-all" }, e('h3', { className: "text-3xl font-black mb-6 text-rose-300 flex items-center gap-3" }, e('span', { className: "text-4xl" }, "⚠️"), "System Shutdown"), e('p', { className: "text-lg opacity-90 leading-relaxed font-bold" }, "In an overdose, specific chemicals (like opioids) overwhelm the brain stem receptors."))
        )
      )
    ),
    e('div', { className: "mb-16" }, e('button', { onClick: () => setShowBrainFact(!showBrainFact), className: "w-full bg-white p-12 rounded-[4rem] shadow-xl border-8 border-indigo-50 flex flex-col items-center gap-6 hover:scale-[1.02] transition-all group" }, e('div', { className: "text-6xl group-hover:rotate-12 transition-transform" }, "🧠"), e('h4', { className: "text-3xl font-black text-indigo-700" }, "Click to see brain chemistry facts"), showBrainFact && e('div', { className: "mt-4 text-2xl font-bold text-slate-600 max-w-3xl animate-fade-down" }, "\"Misuse highjacks the dopamine reward pathway...\"")))
  );
};

const Footer = () => {
  return e('footer', { className: "py-20 bg-white border-t-8 border-teal-50 px-6" },
    e('div', { className: "max-w-7xl mx-auto text-center" },
      e('div', { className: "flex items-center justify-center gap-3 mb-12" }, e('div', { className: "w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl" }, "P"), e('span', { className: "text-3xl font-black tracking-tight text-slate-900" }, "Project Prescribe")),
      e('div', { className: "p-8 bg-slate-50 rounded-[2.5rem] border-4 border-slate-100 text-[11px] font-black uppercase tracking-[0.2em] leading-relaxed text-slate-400 max-w-2xl mx-auto" }, "Disclaimer: Educational purposes only. Always consult a doctor. \u00a9 2024 Project Prescribe.")
    )
  );
};

// --- Main App Controller ---

const App = () => {
  const [activeView, setActiveView] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const renderContent = () => {
    switch (activeView) {
      case 'home': return e('div', { className: "animate-fade-up" }, e(Hero, { onStartClick: () => setActiveView('explore') }), e(SafetyBar), e(AboutUs));
      case 'explore': return e(DrugExplorer);
      case 'weekly': return e(MedicationOfTheWeek);
      case 'salsa': return e(SalsaSafety);
      case 'emergency': return e(EmergencyHub);
      case 'about': return e(AboutUs);
      default: return e(Hero, { onStartClick: () => setActiveView('explore') });
    }
  };

  return e('div', { className: "min-h-screen pt-24" },
    e(Navbar, { activeView, setActiveView }),
    e('main', null, renderContent()),
    e(Footer)
  );
};

// --- Mount Point ---
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(React.StrictMode, null, e(App)));
