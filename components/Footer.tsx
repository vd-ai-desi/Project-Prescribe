
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-white border-t-8 border-teal-50 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl">
            P
          </div>
          <span className="text-3xl font-black tracking-tight text-slate-900">Project Prescribe</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 max-w-4xl mx-auto">
          <div>
            <h5 className="font-black uppercase tracking-widest text-slate-400 text-xs mb-4">The Mission</h5>
            <p className="text-sm font-bold text-slate-500">Teaching the next generation about drug safety and health science.</p>
          </div>
          <div>
            <h5 className="font-black uppercase tracking-widest text-slate-400 text-xs mb-4">Needham Hub</h5>
            <p className="text-sm font-bold text-slate-500">Serving middle and elementary schools across Needham, MA.</p>
          </div>
          <div>
            <h5 className="font-black uppercase tracking-widest text-slate-400 text-xs mb-4">Stay Connected</h5>
            <p className="text-sm font-bold text-slate-500">Contact us through your school science department.</p>
          </div>
        </div>

        <div className="p-8 bg-slate-50 rounded-[2.5rem] border-4 border-slate-100 text-[11px] font-black uppercase tracking-[0.2em] leading-relaxed text-slate-400 max-w-2xl mx-auto">
          Disclaimer: This site is for educational purposes only. Always consult with a doctor or a trusted parent for medical advice.
          <br /><br />
          &copy; 2024 Project Prescribe Student Initiative.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
