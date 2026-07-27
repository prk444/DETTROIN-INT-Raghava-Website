import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Footer from './components/layout/Footer';

/**
 * Main Application orchestrator connecting layout components and page controllers.
 * Enforces the brand-new modern design system styles.
 */
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 selection:bg-[#F4B400]/20 selection:text-[#0F4C81]">
      {/* Premium Sticky Navigation */}
      <Navbar />
      
      {/* Main Page Content */}
      <main className="flex-grow">
        <Home />
      </main>
      
      {/* Modern Informational Footer */}
      <Footer />
    </div>
  );
}

export default App;
