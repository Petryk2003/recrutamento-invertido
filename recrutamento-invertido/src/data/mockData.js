// Dados mockados de candidatos para demonstração
export const candidatosMock = [
  {
    id: 1,
    nome: "Ana Carolina Silva",
    email: "ana.silva@email.com",
    telefone: "(11) 98765-4321",
    cidade: "São Paulo",
    estado: "SP",
    cargo: "Desenvolvedora Full Stack",
    experienciaAnos: 5,
    pretensaoSalarial: "R$ 8.000,00",
    resumo: "Desenvolvedora full stack com 5 anos de experiência em React, Node.js e PostgreSQL. Apaixonada por criar soluções escaláveis e eficientes.",
    foto: "https://i.pravatar.cc/150?img=1",
    formacao: [
      {
        instituicao: "Universidade de São Paulo",
        curso: "Ciência da Computação",
        nivel: "Bacharelado",
        status: "Concluído",
        anoConclusao: 2018
      }
    ],
    experiencia: [
      {
        empresa: "Tech Solutions Ltda",
        cargo: "Desenvolvedora Full Stack Sênior",
        dataInicio: "2021-03",
        dataFim: null,
        atual: true,
        descricao: "Desenvolvimento de aplicações web utilizando React, Node.js e PostgreSQL. Liderança técnica de equipe de 4 desenvolvedores."
      },
      {
        empresa: "StartUp Inovadora",
        cargo: "Desenvolvedora Full Stack Pleno",
        dataInicio: "2019-01",
        dataFim: "2021-02",
        atual: false,
        descricao: "Desenvolvimento de MVP e features para plataforma SaaS."
      }
    ],
    habilidades: [
      { nome: "React", nivel: "Avançado" },
      { nome: "Node.js", nivel: "Avançado" },
      { nome: "PostgreSQL", nivel: "Intermediário" },
      { nome: "TypeScript", nivel: "Avançado" },
      { nome: "Git", nivel: "Avançado" },
      { nome: "Docker", nivel: "Intermediário" }
    ],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Avançado" }
    ],
    disponivelParaTrabalhoRemoto: true,
    disponivelParaMudanca: false
  },
  {
    id: 2,
    nome: "Pedro Henrique Santos",
    email: "pedro.santos@email.com",
    telefone: "(21) 97654-3210",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    cargo: "Designer UX/UI",
    experienciaAnos: 3,
    pretensaoSalarial: "R$ 5.500,00",
    resumo: "Designer UX/UI focado em criar experiências digitais intuitivas e acessíveis. Especialista em Figma e design systems.",
    foto: "https://i.pravatar.cc/150?img=12",
    formacao: [
      {
        instituicao: "PUC-Rio",
        curso: "Design Gráfico",
        nivel: "Bacharelado",
        status: "Concluído",
        anoConclusao: 2020
      }
    ],
    experiencia: [
      {
        empresa: "Agência Digital XYZ",
        cargo: "UX/UI Designer",
        dataInicio: "2021-06",
        dataFim: null,
        atual: true,
        descricao: "Design de interfaces para aplicativos mobile e web. Criação de design systems e condução de testes de usabilidade."
      }
    ],
    habilidades: [
      { nome: "Figma", nivel: "Avançado" },
      { nome: "Adobe XD", nivel: "Avançado" },
      { nome: "User Research", nivel: "Intermediário" },
      { nome: "Prototipagem", nivel: "Avançado" },
      { nome: "Design Systems", nivel: "Intermediário" }
    ],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    disponivelParaTrabalhoRemoto: true,
    disponivelParaMudanca: true
  },
  {
    id: 3,
    nome: "Mariana Costa Lima",
    email: "mariana.lima@email.com",
    telefone: "(31) 99876-5432",
    cidade: "Belo Horizonte",
    estado: "MG",
    cargo: "Gerente de Projetos",
    experienciaAnos: 8,
    pretensaoSalarial: "R$ 12.000,00",
    resumo: "Gerente de projetos certificada PMP com 8 anos de experiência em metodologias ágeis e gestão de equipes multidisciplinares.",
    foto: "https://i.pravatar.cc/150?img=5",
    formacao: [
      {
        instituicao: "UFMG",
        curso: "Engenharia de Produção",
        nivel: "Bacharelado",
        status: "Concluído",
        anoConclusao: 2015
      },
      {
        instituicao: "FGV",
        curso: "MBA em Gestão de Projetos",
        nivel: "Pós-graduação",
        status: "Concluído",
        anoConclusao: 2018
      }
    ],
    experiencia: [
      {
        empresa: "Consultoria Global",
        cargo: "Gerente de Projetos Sênior",
        dataInicio: "2019-08",
        dataFim: null,
        atual: true,
        descricao: "Gestão de múltiplos projetos simultâneos com orçamentos de até R$ 5M. Coordenação de equipes de até 20 pessoas."
      }
    ],
    habilidades: [
      { nome: "Scrum", nivel: "Avançado" },
      { nome: "Kanban", nivel: "Avançado" },
      { nome: "MS Project", nivel: "Avançado" },
      { nome: "Jira", nivel: "Avançado" },
      { nome: "Gestão de Stakeholders", nivel: "Avançado" }
    ],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Fluente" },
      { idioma: "Espanhol", nivel: "Intermediário" }
    ],
    disponivelParaTrabalhoRemoto: true,
    disponivelParaMudanca: false
  },
  {
    id: 4,
    nome: "Carlos Eduardo Ferreira",
    email: "carlos.ferreira@email.com",
    telefone: "(41) 98765-1234",
    cidade: "Curitiba",
    estado: "PR",
    cargo: "Analista de Dados",
    experienciaAnos: 4,
    pretensaoSalarial: "R$ 7.000,00",
    resumo: "Analista de dados especializado em Python, SQL e visualização de dados. Experiência em projetos de Business Intelligence.",
    foto: "https://i.pravatar.cc/150?img=8",
    formacao: [
      {
        instituicao: "UFPR",
        curso: "Estatística",
        nivel: "Bacharelado",
        status: "Concluído",
        anoConclusao: 2019
      }
    ],
    experiencia: [
      {
        empresa: "DataCorp",
        cargo: "Analista de Dados Pleno",
        dataInicio: "2020-02",
        dataFim: null,
        atual: true,
        descricao: "Desenvolvimento de dashboards e relatórios analíticos. Análise exploratória de dados e criação de modelos preditivos."
      }
    ],
    habilidades: [
      { nome: "Python", nivel: "Avançado" },
      { nome: "SQL", nivel: "Avançado" },
      { nome: "Power BI", nivel: "Avançado" },
      { nome: "Excel", nivel: "Avançado" },
      { nome: "Machine Learning", nivel: "Intermediário" }
    ],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    disponivelParaTrabalhoRemoto: true,
    disponivelParaMudanca: false
  },
  {
    id: 5,
    nome: "Juliana Oliveira Souza",
    email: "juliana.souza@email.com",
    telefone: "(85) 99123-4567",
    cidade: "Fortaleza",
    estado: "CE",
    cargo: "Marketing Digital",
    experienciaAnos: 6,
    pretensaoSalarial: "R$ 6.500,00",
    resumo: "Especialista em marketing digital com foco em SEO, Google Ads e estratégias de conteúdo para crescimento orgânico.",
    foto: "https://i.pravatar.cc/150?img=9",
    formacao: [
      {
        instituicao: "UFC",
        curso: "Publicidade e Propaganda",
        nivel: "Bacharelado",
        status: "Concluído",
        anoConclusao: 2017
      }
    ],
    experiencia: [
      {
        empresa: "Agência de Marketing Digital",
        cargo: "Analista de Marketing Sênior",
        dataInicio: "2019-05",
        dataFim: null,
        atual: true,
        descricao: "Gestão de campanhas de Google Ads com orçamentos de até R$ 100k/mês. Estratégias de SEO que aumentaram tráfego orgânico em 300%."
      }
    ],
    habilidades: [
      { nome: "Google Ads", nivel: "Avançado" },
      { nome: "SEO", nivel: "Avançado" },
      { nome: "Google Analytics", nivel: "Avançado" },
      { nome: "Facebook Ads", nivel: "Avançado" },
      { nome: "Copywriting", nivel: "Intermediário" }
    ],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Avançado" }
    ],
    disponivelParaTrabalhoRemoto: true,
    disponivelParaMudanca: true
  }
];

// Dados mockados de empresas
export const empresasMock = [
  {
    id: 1,
    nome: "Tech Solutions Ltda",
    email: "rh@techsolutions.com.br",
    cnpj: "12.345.678/0001-90",
    setor: "Tecnologia",
    tamanho: "51-200 funcionários",
    cidade: "São Paulo",
    estado: "SP",
    descricao: "Empresa de desenvolvimento de software focada em soluções corporativas."
  }
];

// Usuário logado (mockado)
export const usuarioLogado = {
  tipo: 'candidato', // ou 'empresa'
  dados: candidatosMock[0]
};
