import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;