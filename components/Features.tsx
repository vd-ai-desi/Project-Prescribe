
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Jargon-Free Analysis",
      description: "We translate complex clinical data into plain English that any patient can understand.",
      icon: "⚡"
    },
    {
      title: "Interaction Scans",
      description: "Advanced AI cross-references thousands of medications to alert you of potential conflicts.",
      icon: "🔍"
    },
    {
      title: "100% Free Access",
      description: "Our information is a public good. No paywalls, no pharmaceutical sponsors, ever.",
      icon: "🤝"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Designed for the Patient</h2>
          <p className="text-slate-600">We bridge the gap between doctor's orders and patient understanding.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
