// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { HiArrowDownTray } from 'react-icons/hi2';

export default function Hero() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // Dispara animação ao montar
  useEffect(() => {
    const timer = setTimeout(() => setShouldAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []); // Inicia a animação após 300ms na montagem do componente.

  // Reinicia animação ao voltar ao topo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setShouldAnimate(false);
        setTimeout(() => setShouldAnimate(true), 300);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Limpa o listener ao desmontar.
  }, []); // Reinicia a animação quando o usuário volta ao topo da página.

  const words = "Olá, eu sou Edson Carvalho".split(" ");
  
  return (
    <section id="hero" className="min-h-screen flex items-center text-white overflow-hidden relative">
      {/* Fundo animado */}
      <div className="absolute inset-0 hero-gradient-animation"></div>
      
      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Conteúdo */}
      <div className="container mx-auto px-4 relative z-10"> {/* Container principal da seção Hero. */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Foto à esquerda */}
          <div className="flex-shrink-0">
            <img
              src="/edson-carvalho.png" 
              alt="Edson Carvalho"
              className="w-72 h-72 md:w-96 md:h-96 max-w-full rounded-full object-cover border-4 border-cyan-500 shadow-xl"
            />
          </div>

          {/* Conteúdo à direita */}
          <div className="text-center md:text-left max-w-2xl"> {/* Textos e botões da seção. */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ lineHeight: 1.3 }}>
              {words.map((word, i) => (
                <span
                  key={i}
                  className={`inline-block mr-2 ${
                    shouldAnimate 
                      ? 'animate-fade-in-slide' 
                      : 'opacity-0'
                  }`}
                  style={{ 
                    animationDelay: `${i * 0.12}s`,
                    display: 'inline-block'
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p className="text-xl text-blue-200 mb-8">
              Sou um profissional em transição de carreira, migrando da área administrativa onde atuei como{" "}
              <span className="text-yellow-400">Analista Backoffice</span>{" "}
              para minha verdadeira paixão: o desenvolvimento front-end.
            </p> {/* Descrição da transição de carreira. */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => {
                  const projects = document.getElementById('projects');
                  if (projects) {
                    window.scrollTo({
                      top: projects.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition shadow-lg hover:shadow-xl" // Estilos do botão.
              >
                Ver Meus Projetos
              </button>
              <a
                href="/edson-carvalho.pdf"
                download="Edson_Carvalho_Curriculo.pdf"
                className="border border-cyan-400 text-cyan-300 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-900/30 transition flex items-center justify-center"
              > {/* Link para baixar o currículo. */}
                <HiArrowDownTray className="mr-2" />
                Baixar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}