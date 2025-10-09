// src/components/Footer.jsx
import React from 'react';
import { HiEnvelope } from 'react-icons/hi2';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

// --- Componente Footer ---
// Rodapé do site, contendo ícones de contato e informações de copyright.
export default function Footer() {
  // Dados de contato. Substitua pelos seus dados reais.
  const email = "edson4518@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/edson-carvalho-213b051b1/";
  const whatsappNumber = "+5585987855611";
  const githubUrl = "https://github.com/Edson468";

  return (
    // Seção principal do rodapé.
    <footer className="py-12 bg-slate-900 text-slate-400">
      <div className="container mx-auto px-4 text-center">
        {/* Ícones de contato */}
        <div className="flex justify-center space-x-8 mb-8">
          {/* Gmail */}
          <a
            href={`mailto:${email}`}
            className="footer-contact-button group"
            aria-label="Gmail"
          >
            <HiEnvelope className="text-2xl text-red-400 group-hover:text-red-300 transition" />
          </a>

          {/* LinkedIn */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-button group"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl text-blue-400 group-hover:text-blue-300 transition" />
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-button group"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-2xl text-green-400 group-hover:text-green-300 transition" />
          </a>

          {/* GitHub */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-button group"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl text-gray-400 group-hover:text-gray-300 transition" />
          </a>
        </div>

        {/* Texto de copyright e créditos */}
        <p className="mb-2">© {new Date().getFullYear()} Edson Carvalho.</p>
      </div>
    </footer>
  );
}