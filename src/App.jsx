import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Outsourcing from './sections/Outsourcing';
import Footer from './sections/Footer';
import Clients from './sections/Clients';
import Stats from './sections/Stats';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Stats />
        <Outsourcing />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
