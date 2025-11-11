// src/data/projects.js

// --- Dados dos Projetos ---
// Este arquivo exporta um array de objetos, onde cada objeto representa um projeto
// a ser exibido na seção "Meus Projetos" do portfólio.
//
// Estrutura de cada objeto de projeto:
// - id: Identificador único.
// - title: Título do projeto.
// - description: Breve descrição do projeto.
// - link: URL para o projeto (GitHub, deploy, etc.).
// - image: Caminho para a imagem de preview do projeto.

export const projects = [
  {
    id: 1,
    title: "Gestão Financeira",
    description: "Uma aplicação web para gerenciar suas finanças pessoais.",
    link: "https://edson468.github.io/Projeto-Finaceiro/",
    image: "/projetos/Gestao-Financeira.png"
  },
  {
    id: 2,
    title: "Tabuada Interativa",
    description: "Uma aplicação web interativa para aprender a tabuada.",
    link: "https://edson468.github.io/Tabuada-Interativa/",
    image: "/projetos/tabuada-interativa.png"
  },
  {
    id: 3,
    title: "To-do List",
    description: "Uma aplicação web para gerenciar suas tarefas diárias.",
    link: "https://new-todo-list-ten.vercel.app/",
    image: "/projetos/New-To-Do-List.png",
    featured: true // ✅ Destacado
  },
  {
    id: 4,
    title: "Fanpage One Piece",
    description: "Fanpage dedicada ao anime One Piece, com informações sobre personagens e episódios.",
    link: "https://fanpage-one-piece.vercel.app/",
    image: "/projetos/fan-page-one-piece.png"
  },
  {
    id: 5,
    title: "Gerenciador de Barberias - Django",
    description: "Aplicacão para gerenciar agendamentos de clientes e caixa de uma barbearia.",
    link: "https://github.com/Edson468/app_barbearia",
    image: "/projetos/Gerenciador-Barbearia-Django.png"
  },
  {
    id: 6,
    title: "BarberApp - React",
    description: "Aplicação feita em React para agendamento de clientes, caixa e despesas em uma barbearia.",
    link: "https://github.com/Edson468/BarberApp",
    image: "/projetos/BarberApp.png",
    featured: true // ✅ Destacado
  },
  {
    id: 7,
    title: "Barbershop - React",
    description: "Landing page feita em React para uma barbearia.",
    link: "https://barbershop-six-sigma.vercel.app/",
    image: "/projetos/Landing-page-barbearia.png",
    featured: true // ✅ Destacado
  },
  {
    id: 8,
    title: "Farmacia de Manipulação - React",
    description: "Landing page feita em React para uma Farmacia de Manipulação.",
    link: "https://farmacia-de-manipula-o.vercel.app/",
    image: "/projetos/Farmacia-Manipulacao.png",
    //featured: true // ✅ Destacado
  }
];