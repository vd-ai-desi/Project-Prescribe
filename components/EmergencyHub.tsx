
import React from 'react';
import Prescribly from './Prescribly';

const EmergencyHub: React.FC = () => {
  return (
    <div className="animate-fade-up">
      <section className="py-24 bg-rose-600 text-white text-center rounded-b-[6rem] shadow-2xl border-b-[12px] border-rose-700">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-5xl mx-auto mb-10 animate-pulse">🚨</div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-white">Emergency Hub</h2>
          
          <div className="p-10 bg-white rounded-[3.5rem] border-8 border-rose-800 shadow-2xl">
            <h3 className="text-rose-600 text-3xl font-black mb-6">CRITICAL WARNING:</h3>
            <p className="text-2xl font-black text-rose-700 leading-tight">
              If this is a medical emergency right now, call 911 immediately. 
              Do not use this website during an active emergency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: The Science of Narcan */}
          <div className="space-y-12">
            <div className="bg-white p-12 rounded-[4rem] border-8 border-indigo-50 shadow-2xl">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-indigo-600 text-white rounded-3xl flex items-center justify-center text-4xl shadow-lg">🧬</div>
                <h3 className="text-4xl font-black text-slate-900">The Science of Narcan</h3>
              </div>
              <p className="text-xl font-bold text-slate-600 leading-relaxed mb-8">
                Narcan (Naloxone) is a life-saving medicine that can reverse an opioid overdose in minutes. But how does it work at a cellular level?
              </p>
              <div className="bg-indigo-50 p-8 rounded-[3rem] border-4 border-white shadow-inner">
                <h4 className="text-2xl font-black text-indigo-700 mb-4">The "Key Displacement" Strategy</h4>
                <p className="text-lg font-bold text-slate-700 leading-relaxed">
                  Imagine the receptors in your brain stem are specialized locks that control your breathing. Opioids are "sticky keys" that lock your lungs in the "OFF" position. 
                  <br /><br />
                  Narcan is a <strong>competitive antagonist</strong>. It acts like a much stronger key that kicks the opioid keys out of the locks and sits there, holding the lock open so your brain can start telling your lungs to breathe again.
                </p>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[4rem] border-8 border-orange-500 shadow-2xl relative">
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center text-4xl shadow-xl text-white">⚠️</div>
              <h3 className="text-4xl font-black text-orange-600 mb-8">Needham Safety Info</h3>
              <p className="text-2xl font-bold text-slate-700 leading-relaxed mb-10">
                Needham is a proactive community! Look for the "Opioid Emergency Boxes" in every public building—they contain free Narcan.
              </p>
              <div className="bg-orange-50 p-10 rounded-[3rem] border-4 border-orange-100">
                <h4 className="text-2xl font-black text-orange-800 mb-4 font-black italic">"Narcan does not harm people who are not having an overdose."</h4>
                <p className="text-xl font-bold text-orange-700 leading-snug">
                  If you see someone who won't wake up, it is always safer to use Narcan than to wait.
                </p>
              </div>
            </div>
          </div>

          {/* Right: How to Use Narcan Checklist */}
          <div className="bg-slate-900 text-white p-12 md:p-16 rounded-[5rem] shadow-2xl border-[12px] border-slate-800">
            <h3 className="text-4xl font-black mb-12 text-center underline decoration-rose-500 decoration-8 underline-offset-8">How to Use Narcan</h3>
            <div className="space-y-10">
              <div className="flex gap-8">
                <div className="w-14 h-14 bg-rose-500 rounded-2xl flex items-center justify-center text-2xl font-black shrink-0 shadow-lg">1</div>
                <div>
                  <h4 className="text-2xl font-black text-rose-400 mb-2">Check & Call</h4>
                  <p className="text-lg font-bold opacity-80">Shout and rub the middle of their chest hard with your knuckles. If they don't wake up, <strong className="text-white">Call 911 immediately.</strong></p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center text-2xl font-black shrink-0 shadow-lg">2</div>
                <div>
                  <h4 className="text-2xl font-black text-teal-400 mb-2">Prepare the Dose</h4>
                  <p className="text-lg font-bold opacity-80">Take the Narcan out of the box. Do not "test" it—there is only one dose per spray.</p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-2xl font-black shrink-0 shadow-lg">3</div>
                <div>
                  <h4 className="text-2xl font-black text-blue-400 mb-2">Spray Gently</h4>
                  <p className="text-lg font-bold opacity-80">Insert the tip of the nozzle into a nostril until your fingers touch the bottom of their nose. <strong className="text-white">Press the plunger firmly.</strong></p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-14 h-14 bg-yellow-400 text-slate-900 rounded-2xl flex items-center justify-center text-2xl font-black shrink-0 shadow-lg">4</div>
                <div>
                  <h4 className="text-2xl font-black mb-2">Wait & Support</h4>
                  <p className="text-lg font-bold opacity-80">Stay with them. If they aren't breathing better in 2-3 minutes, give a second dose in the other nostril.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-white/10 rounded-[3rem] border-2 border-white/20 text-center">
              <Prescribly action="helmet" size="md" />
              <p className="mt-6 text-xl font-black italic">"Narcan is like a biological shield. It gives doctors time to arrive and save a life."</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyHub;
