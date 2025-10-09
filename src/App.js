// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

// src/App.js
function App() {
  return (
    // Fundo claro geral, mas hero é escuro
    <div className="bg-slate-50 text-slate-800 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />        {/* escuro */}
        <About />       {/* claro */}
        <Projects />    {/* cinza claro */}
        <Skills />      {/* branco */}
        <Contact />     {/* cinza claro */}
      </main>
      <Footer />
    </div>
  );
}

export default App;