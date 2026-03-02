
import React from 'react';

const SafetyBar: React.FC = () => {
  return (
    <section id="safety" className="py-6 px-4 bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
            ⚠️
          </div>
          <div>
            <h2 className="text-xl font-black">Safety First: Opioid Awareness</h2>
            <p className="text-sm font-bold opacity-90">Only take medicine from a trusted adult. Never share!</p>
          </div>
        </div>
        <div className="h-px w-24 bg-white/20 hidden md:block"></div>
        <div>
          <h2 className="text-xl font-black">Safe Disposal</h2>
          <p className="text-sm font-bold opacity-90">Old medicine should go to a "Take-Back" box, not the trash.</p>
        </div>
      </div>
    </section>
  );
};

export default SafetyBar;
