// src/components/Projects.jsx
import React from 'react';
import { projects } from '../data/projects';
import AnimatedSection from './AnimatedSection';
// --- Componente Projects ---
// Exibe uma grade de projetos, buscando os dados do arquivo `projects.js`.
export default function Projects() {
  return (
    // A seção é envolvida pelo `AnimatedSection` para ter um efeito de fade-in.
    <AnimatedSection id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Título da seção */}
        <h2 className="text-3xl font-bold text-center mb-16">Meus Projetos</h2>
        
        {/* Grade responsiva para exibir os cards de projeto. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project) => ( // Itera sobre a lista de projetos.
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card block"
              aria-label={`Ver projeto: ${project.title}`}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 h-full flex flex-col">
                {/* Imagem do projeto */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    // Fallback para caso a imagem não seja encontrada.
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x300?text=Projeto+${project.id}";
                    }}
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-5 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <span className="text-indigo-600 font-medium inline-flex items-center group-hover:underline">
                    Ver projeto
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}