// src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import AnimatedSection from './AnimatedSection';

export default function Projects() {
  // Estado para controlar a abertura/fechamento do modal de projetos.
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Filtra só os projetos marcados como featured: true
  const featuredProjects = projects.filter(project => project.featured);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => { // Rola para o topo do modal após abri-lo.
      const modalContent = document.querySelector('.modal-content');
      if (modalContent) {
        modalContent.scrollTo(0, 0);
      }
    }, 100);
  };

  const closeModal = () => setIsModalOpen(false);
  
  // Fecha modal ao clicar na tecla Escape
  useEffect(() => {
    const handleEsc = (e) => { // Função para fechar o modal ao pressionar a tecla "Escape".
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Impede scroll do body quando modal está aberto
  useEffect(() => {
    if (isModalOpen) { // Se o modal estiver aberto...
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [isModalOpen]);

  return (
    <AnimatedSection id="projects" className="bg-slate-50">
      <div className="container mx-auto px-4"> {/* Container principal da seção de projetos. */}
        <h2 className="text-3xl font-bold text-center mb-16">Meus Projetos</h2>
        
        {/* Projetos principais (só os featured). */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Botão "Ver todos" */}
        {projects.length > featuredProjects.length && (
          <div className="text-center">
            <button // Botão para abrir o modal com todos os projetos.
              onClick={openModal}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl"
            >
              Ver todos os projetos
            </button>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && ( // Renderiza o modal se isModalOpen for true.
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start justify-center p-4 pt-10"
            onClick={closeModal} // Fecha o modal ao clicar fora da área do conteúdo.
          >
            <div 
              className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do modal feche-o.
            >
              {/* Cabeçalho do modal */}
              <div className="flex justify-between items-center p-6 border-b border-slate-200">
                <h3 className="text-2xl font-bold">Todos os Projetos</h3>
                <button 
                  onClick={closeModal}
                  className="text-slate-500 hover:text-slate-700 text-2xl font-bold"
                  aria-label="Fechar"
                >
                  &times;
                </button>
              </div>

              {/* Grid de todos os projetos */}
              <div className="p-6 modal-content">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

// Componente reutilizável de card
function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card block"
      aria-label={`Ver projeto: ${project.title}`}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 h-full flex flex-col">
        <div className="h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/600x300?text=${encodeURIComponent(project.title)}`;
            }}
          />
        </div>
        <div className="p-7 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-slate-800 mb-3">
            {project.title}
          </h3>
          <p className="text-slate-600 mb-5 flex-grow leading-relaxed">
            {project.description}
          </p>
          <span className="text-indigo-600 font-medium inline-flex items-center">
            Ver projeto
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}