
import React from 'react';

interface PrescriblyProps {
  action?: 'wave' | 'bounce' | 'shield' | 'labcoat' | 'helmet';
  size?: 'sm' | 'md' | 'lg';
}

const Prescribly: React.FC<PrescriblyProps> = ({ action = 'bounce', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-12 h-16',
    md: 'w-24 h-32',
    lg: 'w-48 h-64'
  };

  return (
    <div className={`relative flex flex-col items-center justify-center ${sizeClasses[size]} ${action === 'wave' ? 'prescribly-wiggle' : 'prescribly-bounce'}`}>
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-teal-200/30 blur-3xl rounded-full scale-110"></div>
        
        {/* Body of the Pill Mascot */}
        <div className="relative w-full h-full bg-white rounded-full border-[6px] border-teal-600 shadow-2xl overflow-hidden flex flex-col z-10">
          {/* Top Half (Teal) */}
          <div className="w-full h-1/2 bg-teal-500 flex items-center justify-center border-b-4 border-teal-600">
             {/* Eyes */}
             <div className="flex gap-4">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
             </div>
          </div>
          {/* Bottom Half (White) */}
          <div className="w-full h-1/2 bg-white flex items-center justify-center">
             {/* Smile */}
             <div className="w-8 h-4 border-b-4 border-teal-600 rounded-full"></div>
          </div>
        </div>

        {/* Action Overlays */}
        {action === 'helmet' && (
          <div className="absolute -top-4 -left-2 -right-2 h-1/3 bg-rose-600 rounded-t-full border-b-4 border-rose-800 z-20 flex items-center justify-center shadow-lg">
             <div className="w-1/2 h-1 bg-white/30 rounded-full"></div>
          </div>
        )}

        {action === 'labcoat' && (
          <div className="absolute inset-x-0 bottom-0 h-1/2 flex z-15 pointer-events-none">
            <div className="w-1/2 h-full bg-slate-50 border-r-2 border-slate-200 rounded-bl-full"></div>
            <div className="w-1/2 h-full bg-slate-50 border-l-2 border-slate-200 rounded-br-full"></div>
          </div>
        )}

        {action === 'shield' && (
          <div className="absolute -left-6 bottom-8 w-14 h-14 bg-teal-600 border-4 border-white rounded-2xl flex items-center justify-center text-white text-2xl font-black z-30 shadow-xl rotate-[-15deg]">
            🛡️
          </div>
        )}
        
        {action === 'wave' && (
          <div className="absolute -right-6 top-1/2 w-10 h-10 bg-teal-500 border-4 border-white rounded-full flex items-center justify-center text-xl z-30 shadow-lg animate-bounce">
            👋
          </div>
        )}
      </div>
    </div>
  );
};

export default Prescribly;
