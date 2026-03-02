
import React from 'react';
import Prescribly from './Prescribly';

const MedicationOfTheWeek: React.FC = () => {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto animate-fade-up">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
          Medication <span className="text-teal-600">of the Week</span>
        </h2>
        <p className="text-xl font-bold text-slate-500 mt-4 italic">Pharmacology & Body Science with Prescribly</p>
      </div>

      <div className="flex flex-col xl:flex-row gap-12 items-stretch">
        {/* Left: Prescribly as the Instructor */}
        <div className="flex flex-col items-center justify-center bg-white p-8 rounded-[4rem] border-8 border-teal-50 shadow-xl xl:w-1/4">
          <Prescribly action="wave" size="lg" />
          <div className="mt-8 bg-teal-600 text-white p-6 rounded-3xl font-black text-center shadow-lg relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-teal-600"></div>
            "Welcome to the Lab! Let's analyze the biological journey of Penicillin."
          </div>
        </div>

        {/* Center: The Scientific Breakdown */}
        <div className="flex-1 bg-white p-10 md:p-14 rounded-[4rem] border-8 border-slate-50 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-9xl opacity-5 pointer-events-none font-black uppercase">Bio Science</div>
          
          <div className="relative z-10 space-y-12">
            <section>
              <h3 className="text-3xl font-black text-teal-700 mb-6 flex items-center gap-4">
                <span className="bg-teal-100 p-3 rounded-2xl text-2xl">🔬</span> 
                How It Works: The Journey
              </h3>
              <div className="text-xl font-bold text-slate-600 leading-relaxed space-y-6">
                <div>
                  <h4 className="text-teal-600 uppercase text-sm tracking-widest mb-2 font-black">1. Absorption (The Entry)</h4>
                  <p>
                    When taken orally, Penicillin is <strong>absorbed</strong> through the stomach lining and small intestine into the bloodstream. It must survive the acidic environment of the stomach to reach its target.
                  </p>
                </div>
                <div>
                  <h4 className="text-teal-600 uppercase text-sm tracking-widest mb-2 font-black">2. Distribution (The Traveling Key)</h4>
                  <p>
                    The circulatory system <strong>distributes</strong> the medicine throughout the body. Penicillin molecules act like specialized "keys" that specifically seek out "locks" (enzymes called DD-transpeptidases) found only in bacterial cell walls.
                  </p>
                </div>
                <div>
                  <h4 className="text-teal-600 uppercase text-sm tracking-widest mb-2 font-black">3. Elimination (The Cleanup)</h4>
                  <p>
                    Once the task is complete, the kidneys <strong>eliminate</strong> the medicine from the blood through filtration, ensuring that chemical levels in the body return to baseline.
                  </p>
                </div>
              </div>
            </section>

            <section className="p-10 bg-rose-50 rounded-[3rem] border-4 border-rose-100 shadow-xl">
              <h3 className="text-3xl font-black text-rose-600 mb-6 flex items-center gap-4">
                <span className="bg-rose-100 p-3 rounded-2xl text-2xl">🚨</span> 
                Safety & Overdose Facts
              </h3>
              <p className="text-xl font-bold text-rose-800 leading-relaxed font-black">
                While Penicillin is a life-saver, taking too much can overwhelm your body's systems. An overdose can cause <strong>seizures</strong> or severe allergic reactions known as <strong>anaphylaxis</strong>, where your airways tighten and it becomes difficult to breathe. This is why following a doctor's exact dosage is a matter of life and death.
              </p>
            </section>
          </div>
        </div>

        {/* Right: Fun Stats & Pro-Tips */}
        <div className="xl:w-1/3 space-y-8">
          <div className="bg-yellow-400 p-10 rounded-[4rem] shadow-xl border-8 border-yellow-300">
            <h4 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-widest flex items-center gap-3">
              📊 Data Sheet
            </h4>
            <div className="space-y-6">
              <div className="bg-white/40 p-4 rounded-2xl border-2 border-white/60">
                <span className="block text-xs font-black uppercase text-slate-700 opacity-60">Scientific Class</span>
                <span className="text-xl font-black text-slate-900">Beta-lactam Antibiotic</span>
              </div>
              <div className="bg-white/40 p-4 rounded-2xl border-2 border-white/60">
                <span className="block text-xs font-black uppercase text-slate-700 opacity-60">Cellular Target</span>
                <span className="text-xl font-black text-slate-900">Peptidoglycan Synthesis</span>
              </div>
              <div className="bg-white/40 p-4 rounded-2xl border-2 border-white/60">
                <span className="block text-xs font-black uppercase text-slate-700 opacity-60">Common Form</span>
                <span className="text-xl font-black text-slate-900">Amoxicillin / Penicillin G</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-10 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">🛡️</div>
            <h4 className="text-2xl font-black mb-8 uppercase tracking-widest">Safety Protocol</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center font-black shrink-0">1</div>
                <div>
                  <span className="block font-black text-teal-400">Trusted Adults Only</span>
                  <span className="text-sm font-bold opacity-80">Never take medication unless it is handed to you by a doctor or a trusted parent.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center font-black shrink-0">2</div>
                <div>
                  <span className="block font-black text-blue-400">No Sharing</span>
                  <span className="text-sm font-bold opacity-80">Medicines are prescribed for YOUR unique body chemistry. Sharing is dangerous.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center font-black shrink-0">3</div>
                <div>
                  <span className="block font-black text-orange-400">Finish the Lab</span>
                  <span className="text-sm font-bold opacity-80">Stoping early allows "superbugs" to evolve. Complete the full course.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicationOfTheWeek;
