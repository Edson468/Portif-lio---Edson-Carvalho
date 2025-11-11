// src/components/AnimatedSection.jsx
import React, { useEffect, useRef } from 'react';

export default function AnimatedSection({ id, children, className = "" }) {
  const sectionRef = useRef(null);
  
  // Define a animação da seção quando o componente é montado.
  useEffect(() => {
    // Captura o valor atual de sectionRef.current para uso no efeito e na limpeza.
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      // Callback executado quando a seção entra ou sai da viewport.
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target); // Para de observar após a animação ser acionada.
          }
        });
      },
      { threshold: 0.1 }
    ); // Define o limiar de visibilidade para 10%.

    if (currentSectionRef) {
      currentSectionRef.classList.add('opacity-0', 'translate-y-10'); // Adiciona classes para preparar a animação.
      observer.observe(currentSectionRef); // Começa a observar a seção.
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef); // Limpa o observador usando a referência capturada.
      }
    };
  }, []);

  // Aplica as classes extras na section.
  return (
    <section 
      id={id}
      ref={sectionRef}
      className={`py-12 transition-opacity duration-700 ${className}`}
    >
      {children}
    </section>
  );
}