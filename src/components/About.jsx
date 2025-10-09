// src/components/About.jsx
import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function About() {
  // Função de rolagem suave para contato
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatedSection id="about" className="bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mt-16 mb-8">Sobre Mim</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mb-6">
          {/* Texto à esquerda */}
          <div className="md:w-1/2">
            <div className="space-y-6 text-lg text-slate-700">
              <p>
                Olá, eu sou Edson Carvalho! Tenho 38 anos e sou um entusiasta da tecnologia em constante evolução. Atualmente, estou cursando <strong>Análise e Desenvolvimento de Sistemas</strong> na Faculdade Facint, onde venho consolidando minha base teórica e prática para me tornar um profissional completo na área.
              </p>

              <p>
                Além da faculdade, busco me especializar por meio de cursos e workshops complementares. Participei de eventos como o workshop da EBAC sobre a rotina de um QA e a Trilha de Desenvolvimento Web da Rocketseat, onde aprimorei meus conhecimentos em HTML, CSS e JavaScript. Também possuo certificações em <span className="text-yellow-600 font-medium">Teste de Software Manual: Do Planejamento à Execução</span> e estou me aprofundando em <span className="text-yellow-600 font-medium">Desenvolvimento Web</span> por meio de cursos na Udemy, onde estou aprendendo tecnologias modernas como:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li><span className="text-yellow-600">HTML, CSS e JavaScript</span> (fundamentos da web)</li>
                <li><span className="text-yellow-600">TypeScript</span> (para um código mais robusto)</li>
                <li><span className="text-yellow-600">React e Next.js</span> (construção de interfaces dinâmicas)</li>
                <li><span className="text-yellow-600">Tailwind CSS</span> (estilização eficiente)</li>
              </ul>

              <p>
                Minha jornada é marcada pela dedicação em aprender e aplicar conhecimentos tanto em desenvolvimento quanto em qualidade de software (QA), buscando sempre entregar soluções eficientes e de alta qualidade.
              </p>

              <p className="pt-4 border-t border-slate-200">
                Estou aberto a novas oportunidades e colaborações. Se quiser trocar ideias ou conhecer mais sobre meu trabalho, fique à vontade para{" "}
                <button
                  onClick={scrollToContact}
                  className="text-indigo-600 hover:underline font-medium inline underline-offset-2"
                >
                  entrar em contato
                </button>
                !
              </p>
            </div>
          </div>

          {/* Imagem à direita */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/man_working.png" // ← ajuste o nome do seu arquivo
              alt="Edson Carvalho"
              className="w-64 h-150 md:w-96 md:h-128 object-cover align-center"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}