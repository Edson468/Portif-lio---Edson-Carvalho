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

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-cyan-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
  ];

  return (
    <section id="skills" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Habilidades</h2>
        
        {/* Container com scroll horizontal garantido */}
        <div className="flex overflow-x-auto pb-4 -mx-4 px-4 hide-scrollbar">
          <div className="flex items-center gap-10 min-w-max">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[80px] group"
              >
                <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <div className="text-3xl">
                    {skill.icon}
                  </div>
                </div>
                <span className="text-sm text-slate-700 font-medium text-center whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}