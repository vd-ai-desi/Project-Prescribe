
import React from 'react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-24 px-4 bg-cyan-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-cyan-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-cyan-400 rounded-full blur-[120px] opacity-20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Our transparency is our strength.</h2>
        <p className="text-xl text-cyan-100 leading-relaxed mb-12">
          Project Prescribe was founded on the belief that everyone has a right to know exactly what is going into their body. We don't take money from drug manufacturers. We don't sell your data. We just provide truth.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl font-bold text-cyan-400">1M+</div>
            <div className="text-xs uppercase tracking-widest font-bold text-cyan-200 mt-2">Medications Indexed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-400">0%</div>
            <div className="text-xs uppercase tracking-widest font-bold text-cyan-200 mt-2">Industry Funding</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-400">24/7</div>
            <div className="text-xs uppercase tracking-widest font-bold text-cyan-200 mt-2">AI Assistance</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-400">100%</div>
            <div className="text-xs uppercase tracking-widest font-bold text-cyan-200 mt-2">Privacy Secured</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
