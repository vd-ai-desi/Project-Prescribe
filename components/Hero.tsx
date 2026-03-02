
import React from 'react';
import Prescribly from './Prescribly';

interface HeroProps {
  onStartClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartClick }) => {
  return (
    <section className="pt-24 pb-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 text-center lg:text-left">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-teal-50 border-2 border-teal-100 text-teal-700 text-sm font-black mb-8">
            🚀 Learning is the best medicine!
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Prescribing <span className="text-teal-600">Knowledge</span>, <br />
            Promoting <span className="text-orange-500 underline decoration-orange-200 decoration-8 underline-offset-4">Safety.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl lg:mx-0 mx-auto mb-12 leading-relaxed font-bold">
            Hi! We're Dylan and Ved. Welcome to our student project designed to keep Needham healthy and informed!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <button 
              onClick={onStartClick}
              className="w-full sm:w-auto px-10 py-5 bg-teal-600 text-white font-black text-xl rounded-[2rem] hover:bg-teal-700 transition-all shadow-xl shadow-teal-100 active:scale-95"
            >
              Start Exploring!
            </button>
            <a href="#about" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border-4 border-slate-100 font-black text-xl rounded-[2rem] hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center">
              Meet Dylan & Ved
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 flex flex-col items-center">
          <Prescribly action="wave" size="lg" />
          <div className="mt-4 bg-white px-8 py-3 rounded-[2rem] shadow-xl border-4 border-teal-50 font-black text-teal-600 text-2xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-b-white"></div>
            Welcome! I'm Prescribly!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
