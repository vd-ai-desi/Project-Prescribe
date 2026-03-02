
import React from 'react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
        <button 
          onClick={() => setActiveView('home')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm transition-all shadow-lg active:scale-95 ${
            activeView === 'home' ? 'bg-blue-500 text-white scale-105' : 'bg-white text-blue-500 hover:bg-blue-50'
          }`}
        >
          <span>🏠</span> Home
        </button>

        <button 
          onClick={() => setActiveView('explore')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm transition-all shadow-lg active:scale-95 ${
            activeView === 'explore' ? 'bg-teal-500 text-white scale-105' : 'bg-white text-teal-500 hover:bg-teal-50'
          }`}
        >
          <span>🔍</span> Explorer
        </button>

        <button 
          onClick={() => setActiveView('weekly')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm transition-all shadow-lg active:scale-95 ${
            activeView === 'weekly' ? 'bg-yellow-400 text-slate-900 scale-105' : 'bg-white text-yellow-600 hover:bg-yellow-50'
          }`}
        >
          <span>🌟</span> Med of the Week
        </button>

        <button 
          onClick={() => setActiveView('salsa')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm transition-all shadow-lg active:scale-95 ${
            activeView === 'salsa' ? 'bg-indigo-600 text-white scale-105' : 'bg-white text-indigo-600 hover:bg-indigo-50'
          }`}
        >
          <span>🛡️</span> SALSA Safety
        </button>

        <button 
          onClick={() => setActiveView('emergency')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm transition-all shadow-xl active:scale-95 animate-pulse border-4 border-rose-500 ${
            activeView === 'emergency' ? 'bg-rose-600 text-white scale-105' : 'bg-rose-500 text-white hover:bg-rose-600'
          }`}
        >
          <span>🚨</span> EMERGENCY
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
