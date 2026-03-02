
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SafetyBar from './components/SafetyBar';
import DrugExplorer from './components/DrugExplorer';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import EmergencyHub from './components/EmergencyHub';
import MedicationOfTheWeek from './components/MedicationOfTheWeek';
import SalsaSafety from './components/SalsaSafety';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return (
          <div className="animate-fade-up">
            <Hero onStartClick={() => setActiveView('explore')} />
            <SafetyBar />
            <AboutUs />
          </div>
        );
      case 'explore':
        return <DrugExplorer />;
      case 'weekly':
        return <MedicationOfTheWeek />;
      case 'salsa':
        return <SalsaSafety />;
      case 'emergency':
        return <EmergencyHub />;
      case 'about':
        return <AboutUs />;
      default:
        return <Hero onStartClick={() => setActiveView('explore')} />;
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <Navbar activeView={activeView} setActiveView={setActiveView} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
