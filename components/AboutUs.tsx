
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white rounded-t-[5rem] mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Meet Our Founders
          </h2>
          <p className="text-xl font-bold text-slate-600 max-w-3xl mx-auto italic leading-relaxed">
            "We are dedicated students from Needham High School and members of SALSA. Our mission is to ensure that every student has free, easy-to-understand, and life-saving information about medications and the realities of overdose. We believe knowledge is the best tool for prevention."
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Dylan */}
          <div className="flex flex-col items-center group">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-teal-100 rounded-full scale-110 group-hover:rotate-12 transition-transform"></div>
              <div className="w-64 h-64 rounded-full border-8 border-white shadow-2xl overflow-hidden relative z-10 bg-teal-500 flex items-center justify-center">
                <span className="text-8xl font-black text-white">D</span>
              </div>
            </div>
            <h3 className="text-3xl font-black text-slate-900">Dylan</h3>
            <span className="text-teal-600 font-black uppercase tracking-widest text-sm">NHS Student & SALSA Leader</span>
          </div>

          {/* Ved */}
          <div className="flex flex-col items-center group">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-orange-100 rounded-full scale-110 group-hover:-rotate-12 transition-transform"></div>
              <div className="w-64 h-64 rounded-full border-8 border-white shadow-2xl overflow-hidden relative z-10 bg-orange-500 flex items-center justify-center">
                <span className="text-8xl font-black text-white">V</span>
              </div>
            </div>
            <h3 className="text-3xl font-black text-slate-900">Ved</h3>
            <span className="text-orange-600 font-black uppercase tracking-widest text-sm">NHS Student & SALSA Leader</span>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-slate-50 p-12 rounded-[4rem] border-4 border-slate-100">
          <div className="space-y-6 text-xl font-bold text-slate-600 leading-relaxed text-center">
            <p>
              Project Prescribe was founded at Needham High School to bridge the gap between complex pharmacology and community safety. As active members of <strong>SALSA (Students Advocating for Life without Substance Abuse)</strong>, we are committed to providing the clinical honesty required to prevent medicine misuse.
            </p>
            <div className="h-1 w-24 bg-teal-200 mx-auto my-8 rounded-full"></div>
            <p className="text-teal-700 font-black uppercase tracking-widest text-sm">
              Science for Safety • Needham, MA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
