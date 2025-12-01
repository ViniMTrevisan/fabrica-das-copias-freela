import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Outsourcing from './sections/Outsourcing';
import Footer from './sections/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Outsourcing />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
