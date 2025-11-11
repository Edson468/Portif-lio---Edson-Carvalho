// src/components/Contact.jsx
import React from 'react';
import { HiEnvelope } from 'react-icons/hi2';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

// Exibe as principais formas de contato com ícones e links.
export default function Contact() {
  // Dados de contato. Substitua pelos seus dados reais.
  const email = "edson4518@gmail.com"; // Seu email.

  const linkedinUrl = "https://www.linkedin.com/in/edson-carvalho-213b051b1/";
  const whatsappNumber = "+5585987855611";
  const githubUrl = "https://github.com/Edson468";

  return (
    // Seção principal de contato.
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl text-center"> {/* Container principal da seção de contato. */}
        <h2 className="text-3xl font-bold mb-6">Vamos conversar?</h2>
        <p className="text-slate-600 mb-10">
          Interessado em trabalhar junto ou só quer trocar uma ideia?  
          Estou sempre aberto a novas oportunidades!
        </p>

        {/* Container para os botões de contato. */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Gmail - Vermelho */}
          <a // Link para enviar email.
            href={`mailto:${email}`}
            className="contact-button group bg-red-100 hover:bg-red-400 border-red-500"
            aria-label="Gmail"
          >
            <HiEnvelope className="text-3xl text-red-600 mb-2 group-hover:text-white transition" />
            <span className="font-medium text-red-800 group-hover:text-white transition">Gmail</span>
          </a>

          {/* LinkedIn - Azul */}
          <a // Link para o LinkedIn.
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button group bg-blue-200 hover:bg-blue-600 border-blue-700"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-3xl text-blue-600 mb-2 group-hover:text-white transition" />
            <span className="font-medium text-blue-800 group-hover:text-white transition">LinkedIn</span>
          </a>

          {/* WhatsApp - Verde */}
          <a // Link para o WhatsApp.
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button group bg-green-100 hover:bg-green-400 border-green-500"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-3xl text-green-600 mb-2 group-hover:text-white transition" />
            <span className="font-medium text-green-800 group-hover:text-white transition">WhatsApp</span>
          </a>

          {/* GitHub - Cinza */}
          <a // Link para o GitHub.
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button group bg-gray-400 hover:bg-gray-600 border-gray-700"
            aria-label="GitHub"
          >
            <FaGithub className="text-3xl text-gray-800 mb-2 group-hover:text-white transition" />
            <span className="font-medium text-gray-900 group-hover:text-white transition">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}