// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import {
  HiUser,
  HiFolder,
  HiCommandLine,
  HiEnvelope,
  //HiChevronDoubleUp
} from 'react-icons/hi2';

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detecta seção ativa ao rolar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      }
      
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // 👈 Dependência atualizada: agora é vazia para evitar recriação desnecessária

  // Rolagem suave
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false); // Fecha o menu após clicar
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={scrollToTop}
          className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition flex items-center"
          aria-label="Voltar para o início"
        >
          <span className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
            EC
          </span>
          <span className="ml-2 hidden md:inline">Edson Carvalho</span>
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection('about')}
            className={`flex items-center space-x-2 font-medium transition ${
              activeSection === 'about' 
                ? 'text-indigo-600' 
                : 'text-slate-600 hover:text-indigo-600'
            }`}
          >
            <HiUser className="text-lg" />
            <span>Sobre</span>
          </button>
          
          <button
            onClick={() => scrollToSection('projects')}
            className={`flex items-center space-x-2 font-medium transition ${
              activeSection === 'projects' 
                ? 'text-indigo-600' 
                : 'text-slate-600 hover:text-indigo-600'
            }`}
          >
            <HiFolder className="text-lg" />
            <span>Projetos</span>
          </button>
          
          <button
            onClick={() => scrollToSection('skills')}
            className={`flex items-center space-x-2 font-medium transition ${
              activeSection === 'skills' 
                ? 'text-indigo-600' 
                : 'text-slate-600 hover:text-indigo-600'
            }`}
          >
            <HiCommandLine className="text-lg" />
            <span>Habilidades</span>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className={`flex items-center space-x-2 font-medium transition ${
              activeSection === 'contact' 
                ? 'text-indigo-600' 
                : 'text-slate-600 hover:text-indigo-600'
            }`}
          >
            <HiEnvelope className="text-lg" />
            <span>Contato</span>
          </button>
        </nav>

        {/* Botão menu mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-slate-700 focus:outline-none"
          aria-label="Alternar menu"
        >
          {/* Ícone de hambúrguer */}
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Menu mobile suspenso com animação suave */}
      <div 
        className={`md:hidden bg-white border-t border-slate-200 overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <button
            onClick={() => scrollToSection('about')}
            className={`flex items-center space-x-3 font-medium py-2 ${
              activeSection === 'about' 
                ? 'text-indigo-600' 
                : 'text-slate-700'
            }`}
          >
            <HiUser className="text-lg" />
            <span>Sobre</span>
          </button>
          
          <button
            onClick={() => scrollToSection('projects')}
            className={`flex items-center space-x-3 font-medium py-2 ${
              activeSection === 'projects' 
                ? 'text-indigo-600' 
                : 'text-slate-700'
            }`}
          >
            <HiFolder className="text-lg" />
            <span>Projetos</span>
          </button>
          
          <button
            onClick={() => scrollToSection('skills')}
            className={`flex items-center space-x-3 font-medium py-2 ${
              activeSection === 'skills' 
                ? 'text-indigo-600' 
                : 'text-slate-700'
            }`}
          >
            <HiCommandLine className="text-lg" />
            <span>Habilidades</span>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className={`flex items-center space-x-3 font-medium py-2 ${
              activeSection === 'contact' 
                ? 'text-indigo-600' 
                : 'text-slate-700'
            }`}
          >
            <HiEnvelope className="text-lg" />
            <span>Contato</span>
          </button>
        </div>
      </div>
    </header>
  );
}