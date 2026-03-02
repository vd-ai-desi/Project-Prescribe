
import React from 'react';

const Community: React.FC = () => {
  const steps = [
    { title: "Learn", icon: "📚", text: "Use our explorer to understand your medicine." },
    { title: "Ask", icon: "🗣️", text: "Always talk to your doctor or parents if you have questions." },
    { title: "Dispose", icon: "♻️", text: "Bring old pills to the Needham Police station take-back bin!" }
  ];

  return (
    <section id="community" className="py-32 px-6 bg-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 leading-tight">
              A Student Initiative from <span className="text-teal-600">Needham, MA</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 font-bold leading-relaxed">
              Founded by <span className="text-teal-700 underline decoration-teal-200 decoration-4">Dylan and Ved</span>, student leaders dedicated to community health education. We believe that when kids understand science, they stay safer.
            </p>
            <div className="space-y-6">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-6 bg-white p-6 rounded-[2.5rem] shadow-sm border-4 border-white hover:border-teal-100 transition-all">
                  <div className="text-4xl">{s.icon}</div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{s.title}</h3>
                    <p className="text-slate-500 font-bold">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square bg-white rounded-[4rem] border-8 border-teal-200 overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center flex-col gap-6">
                 <div className="w-32 h-32 bg-teal-50 rounded-full flex items-center justify-center text-6xl shadow-inner">👨‍🎓👨‍🎓</div>
                 <h4 className="text-3xl font-black text-teal-800">Dylan & Ved</h4>
                 <p className="font-bold text-teal-600 leading-snug">Empowering students to help other students through clinical honesty.</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-orange-400 rounded-[2.5rem] flex items-center justify-center text-6xl shadow-xl shadow-orange-100 animate-bounce">🏠</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
