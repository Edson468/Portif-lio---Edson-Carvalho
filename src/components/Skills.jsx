// src/components/Skills.jsx
import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGitAlt,
  FaNodeJs
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFigma, SiNextdotjs } from 'react-icons/si';

// --- Componente Skills ---
// Exibe uma lista de habilidades (skills) com seus respectivos ícones.
export default function Skills() {
  // Array de objetos, cada um representando uma habilidade com nome e ícone.
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-cyan-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black !important" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
  ];

  return (
    // Seção principal de habilidades.
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Habilidades</h2>
        
        {/* Container para os ícones de habilidades.
            Permite rolagem horizontal em telas pequenas para não quebrar o layout. */}
        <div className="flex flex-nowrap overflow-x-auto pb-4 gap-10 justify-center hide-scrollbar">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[80px] group"
            >
              {/* Ícone maior: text-4xl = 36px */}
              <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {skill.icon}
              </div>
              <span className="text-sm text-slate-700 font-medium text-center whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}