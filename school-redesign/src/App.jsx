import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import WelcomeScreen from './components/layout/WelcomeScreen';

/**
 * Main Application orchestrator connecting layout components and page controllers.
 * Enforces the brand-new modern design system styles and Welcome Experience.
 */
function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-[#EBF1E9] selection:bg-[#D4DE95]/20 selection:text-[#636B2F]">
      {/* Welcome Screen Overlay */}
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen key="welcome-screen" onComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {/* Site Frame */}
      <div className={showWelcome ? 'overflow-hidden max-h-screen pointer-events-none' : ''}>
        <Navbar />
        
        {/* Main Page Content */}
        <main className="flex-grow">
          <Home isWelcomeActive={showWelcome} />
        </main>
        
        {/* Modern Informational Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
