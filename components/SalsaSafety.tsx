
import React, { useState } from 'react';
import Prescribly from './Prescribly';

const SalsaSafety: React.FC = () => {
  const [showBrainFact, setShowBrainFact] = useState(false);

  return (
    <div className="py-24 px-6 max-w-6xl mx-auto animate-fade-up">
      <div className="bg-indigo-900 text-white rounded-[4rem] p-12 md:p-20 shadow-2xl relative overflow-hidden mb-16">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <div className="inline-block px-6 py-2 bg-indigo-500 rounded-full font-black text-xs uppercase tracking-widest mb-6 border border-white/20">
            Official SALSA Partnership
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">The SALSA Safety Zone</h2>
          <p className="text-2xl font-bold opacity-90 leading-relaxed max-w-3xl mb-12">
            Empowering Needham students with the science to advocate for a life without substance abuse.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 p-10 rounded-[3rem] border-2 border-white/20 hover:bg-white/15 transition-all">
              <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
                <span className="text-4xl">🛠️</span> Tools vs. Toxins
              </h3>
              <p className="text-lg opacity-80 leading-relaxed font-bold">
                Medications are chemical tools designed to fix specific biological issues. However, when used outside of a doctor's orders—taking someone else's prescription or taking too much—they become dangerous toxins that stress your organs beyond their capacity.
              </p>
            </div>
            <div className="bg-rose-500/20 p-10 rounded-[3rem] border-2 border-rose-500/30 hover:bg-rose-500/25 transition-all">
              <h3 className="text-3xl font-black mb-6 text-rose-300 flex items-center gap-3">
                <span className="text-4xl">⚠️</span> System Shutdown
              </h3>
              <p className="text-lg opacity-90 leading-relaxed font-bold">
                In an overdose, specific chemicals (like opioids) overwhelm the receptors in your <strong>brain stem</strong>. This part of the brain controls your autonomic systems—like your heartbeat and your "breathing drive." If these receptors are overloaded, the brain simply stops telling the lungs to breathe.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <button 
          onClick={() => setShowBrainFact(!showBrainFact)}
          className="w-full bg-white p-12 rounded-[4rem] shadow-xl border-8 border-indigo-50 flex flex-col items-center gap-6 hover:scale-[1.02] transition-all group"
        >
          <div className="text-6xl group-hover:rotate-12 transition-transform">🧠</div>
          <h4 className="text-3xl font-black text-indigo-700">Click to see what happens in the brain during misuse</h4>
          {showBrainFact && (
            <div className="mt-4 text-2xl font-bold text-slate-600 max-w-3xl animate-fade-down">
              "Misuse highjacks the <strong>dopamine reward pathway</strong>. This creates a chemical 'shortcut' to feeling good, which eventually tricks the brain into needing the drug just to feel normal. This is the biological basis of addiction—it's not a choice, it's a chemical change."
            </div>
          )}
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-10 rounded-[3rem] shadow-xl border-4 border-slate-50 flex flex-col items-center text-center">
          <Prescribly action="shield" size="md" />
          <h4 className="text-xl font-black mt-6 text-slate-800 uppercase tracking-widest">Protective Science</h4>
          <p className="text-slate-500 font-bold mt-2">Knowing the biology of drugs is your best shield against misuse.</p>
        </div>
        <div className="bg-white p-10 rounded-[3rem] shadow-xl border-4 border-slate-50 flex flex-col items-center text-center">
          <div className="text-5xl mb-6">🏘️</div>
          <h4 className="text-xl font-black text-slate-800 uppercase tracking-widest">Needham United</h4>
          <p className="text-slate-500 font-bold mt-2">We advocate for a community where no student is left uninformed.</p>
        </div>
        <div className="bg-white p-10 rounded-[3rem] shadow-xl border-4 border-slate-50 flex flex-col items-center text-center">
          <div className="text-5xl mb-6">🩺</div>
          <h4 className="text-xl font-black text-slate-800 uppercase tracking-widest">Clinical Truth</h4>
          <p className="text-slate-500 font-bold mt-2">We replace myths with life-saving facts about overdose and prevention.</p>
        </div>
      </div>
    </div>
  );
};

export default SalsaSafety;
