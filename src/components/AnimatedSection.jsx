// src/components/AnimatedSection.jsx
import React, { useEffect, useRef } from 'react';

// --- Componente AnimatedSection ---
// Este é um componente reutilizável que envolve outras seções para aplicar
// uma animação de "fade-in" quando a seção se torna visível na tela.
export default function AnimatedSection({ id, children, className = "" }) {
  // Cria uma referência para o elemento da seção.
  const sectionRef = useRef(null);

  // Efeito que é executado uma vez quando o componente é montado.
  useEffect(() => {
    // Cria um IntersectionObserver para observar quando a seção entra na viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        // Para cada entrada (seção) observada...
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // A animação é acionada quando 10% da seção está visível.
    );

    if (sectionRef.current) {
      // Inicializa a seção como invisível e ligeiramente deslocada para baixo.
      sectionRef.current.classList.add('opacity-0', 'translate-y-10');
      // Começa a observar a seção.
      observer.observe(sectionRef.current);
    }

    // Função de limpeza: para de observar a seção quando o componente é desmontado.
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Renderiza o elemento <section> com as propriedades e classes necessárias.
  return (
    <section 
      id={id}
      ref={sectionRef}
      className={`min-h-screen flex items-center transition-opacity duration-700 ${className}`}
    >
      {children}
    </section>
  );
}