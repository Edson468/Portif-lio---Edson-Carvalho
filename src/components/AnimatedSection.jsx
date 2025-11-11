// src/components/AnimatedSection.jsx
import React, { useEffect, useRef } from 'react';

export default function AnimatedSection({ id, children, className = "" }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionRef.current.classList.add('opacity-0', 'translate-y-10');
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Aplica as classes extras na section
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