import { Project, Experience, Skill } from './types';

export const DEVELOPER_INFO = {
  name: "Kauã Rei",
  title: "FULL STACK ENGINEER",
  subtitle: "CRIANDO INTERFACES SENSORIAIS E ARQUITETURAS INDESTRUTÍVEIS",
  tagline: "Desenvolvedor Full Stack junior experiências digitais de alta fidelidade, performance de milissegundos e arquiteturas escaláveis. Unindo design premium e engenharia impecável.",
  email: "kaua.rei@dev.io",
  whatsappUrl: "https://wa.me/5513996576383?text=Ol%C3%A1%20Kau%C3%A3!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
  github: "https://github.com/krei03",
  linkedin: "https://www.linkedin.com/in/kau%C3%A3-rei-702215254",
  location: "São Paulo, SP - Brasil",
  status: "Disponível para projetos premium",
  stats: [
    { value: "1+ Ano", label: "De Experiência" },
    { value: "15+", label: "Landing Pages & Sistemas" },
    { value: "Full Stack", label: "Frontend & Backend" },
    { value: "CRM Systems", label: "Experiência de Gestão" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "apex-analytics",
    title: "Apex Analytics Dashboard",
    category: "DATA VISUALIZER & CRUD",
    description: "Plataforma de monitoramento de tráfego web e integridade de servidores com gráficos e rotas integradas de alta performance.",
    longDescription: "Um dashboard administrativo robusto voltado para análise de tráfego interno. O sistema utiliza HTML5 semântico e CSS altamente otimizado com rotas eficientes em Express.js, consumindo consultas MySQL para manter tempos de carregamento instantâneos.",
    tags: ["Node.js", "Express.js", "HTML", "CSS", "JavaScript", "MySQL"],
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MySQL"],
    featured: true,
    stats: [
      { label: "Tempo de Carregamento", value: "0.8s" },
      { label: "APIs REST", value: "100% Ok" },
      { label: "Queries MySQL", value: "12ms" }
    ],
    mockType: 'analytics'
  },
  {
    id: "vortex-commerce",
    title: "Vortex Landing Page",
    category: "FRONTEND DE ALTO DESEMPENHO",
    description: "Landing page corporativa responsiva e otimizada com foco total em conversão e layouts perfeitos.",
    longDescription: "Desenvolvido com design responsivo avançado, usando CSS fluido e animações leves em JavaScript. Hospedagem automatizada de forma contínua com deploy direto utilizando a plataforma Vercel.",
    tags: ["HTML", "CSS", "JavaScript", "Vercel", "Responsividade", "Landing Pages"],
    tech: ["HTML5", "CSS3", "JavaScript", "Vercel", "Git/GitHub"],
    featured: true,
    stats: [
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Conversão de Leads", value: "+32%" },
      { label: "Tempo Interativo", value: "0.5s" }
    ],
    mockType: 'commerce'
  },
  {
    id: "quantum-db",
    title: "Quantum Portal Admin",
    category: "SISTEMA BACKEND INTEGRADO",
    description: "Interface administrativa e painel de controle corporativo com autenticação segura e relatórios dinâmicos.",
    longDescription: "Uma ferramenta eficiente de gerenciamento onde administradores controlam usuários e geram relatórios corporativos. Integração direta com MySQL através do Express.js, deploy configurado no Railway e conteinerização via Docker.",
    tags: ["Node.js", "Express.js", "MySQL", "APIs REST", "Docker", "Railway"],
    tech: ["Node.js", "Express.js", "MySQL", "Docker", "Railway", "Git"],
    featured: true,
    stats: [
      { label: "Uptime do Deploy", value: "99.9%" },
      { label: "Login Seguro", value: "SHA-256" },
      { label: "Requisições/sec", value: "5K/s" }
    ],
    mockType: 'database'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Desenvolvedor Full Stack",
    company: "Stellar FinTech",
    period: "2024 - Presente",
    description: [
      "Desenvolvimento e otimização de sistemas internos web e painéis administrativos usando Node.js e Express.js.",
      "Redução no tempo de resposta das consultas do banco através de tunamento de queries SQL complexas no MySQL.",
      "Criação e refatoração de Landing Pages estruturadas focadas em performance e excelente responsividade móvel.",
      "Versionamento rigoroso de código com Git/GitHub e implementação de deploys automatizados nas plataformas Vercel e Railway."
    ],
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"]
  },
  {
    id: "exp-2",
    role: "Desenvolvedor Frontend Freelancer",
    company: "Vercel Partner Agency",
    period: "2022 - 2024",
    description: [
      "Desenvolvi e publiquei mais de 15 landing pages responsivas de alta fidelidade baseadas em designs premium no Figma.",
      "Codificação cuidadosa de layouts fluídos com HTML5 e CSS3 moderno, otimizando o carregamento e SEO de páginas estáticas.",
      "Deploy contínuo e integrado via Vercel, solucionando problemas de responsividade e compatibilidade entre múltiplos navegadores."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Vercel", "Git/GitHub", "Landing Pages"]
  },
  {
    id: "exp-3",
    role: "Desenvolvedor backend júnior",
    company: "Acre Technologies",
    period: "2020 - 2022",
    description: [
      "Focado na criação e organização estruturada de rotas MVC no Express.js e consumo de APIs REST eficientes.",
      "Implementação operacional de sistemas de Autenticação/Login seguros com criptografia e validação de dados.",
      "Modelagem e manutenção de tabelas no MySQL com auxílio de ambientes locais dockerizados rodando Docker."
    ],
    skills: ["Node.js", "Express.js", "MySQL", "Autenticação", "Docker", "VS Code"]
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "HTML", category: "frontend", level: 85, iconName: "html", duration: "Sólido" },
  { name: "CSS", category: "frontend", level: 80, iconName: "css", duration: "Sólido" },
  { name: "JavaScript", category: "frontend", level: 75, iconName: "javascript", duration: "Produtivo" },
  { name: "Responsividade", category: "frontend", level: 70, iconName: "responsive", duration: "Prático" },
  { name: "UI/UX básico", category: "frontend", level: 70, iconName: "uiux", duration: "Conceito" },
  { name: "Landing Pages", category: "frontend", level: 75, iconName: "landing", duration: "Focado" },

  // Backend
  { name: "Node.js", category: "backend", level: 70, iconName: "nodejs", duration: "Produtivo" },
  { name: "Express.js", category: "backend", level: 65, iconName: "express", duration: "Produtivo" },
  { name: "MySQL", category: "backend", level: 70, iconName: "mysql", duration: "Prático" },
  { name: "APIs REST", category: "backend", level: 65, iconName: "restapi", duration: "Ativo" },
  { name: "Autenticação/Login", category: "backend", level: 60, iconName: "auth", duration: "Prático" },
  { name: "Organização de rotas", category: "backend", level: 65, iconName: "routes", duration: "Prático" },

  // DevOps & Cloud
  { name: "Git/GitHub", category: "devops", level: 65, iconName: "git", duration: "Produtivo" },
  { name: "Docker", category: "devops", level: 50, iconName: "docker", duration: "Básico" },
  { name: "Vercel", category: "devops", level: 70, iconName: "vercel", duration: "Ativo" },
  { name: "Railway", category: "devops", level: 65, iconName: "railway", duration: "Ativo" },
  { name: "VS Code", category: "devops", level: 85, iconName: "vscode", duration: "Diário" },
  { name: "Deploy de projetos", category: "devops", level: 65, iconName: "deploy", duration: "Prático" }
];
