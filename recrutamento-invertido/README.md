# TalentMatch - Plataforma de Recrutamento Invertido

## 📋 Sobre o Projeto

TalentMatch é uma plataforma web de recrutamento invertido onde **candidatos não se candidatam a vagas**. Em vez disso, eles criam um perfil completo e são **encontrados pelas empresas** através de filtros e buscas avançadas.

Este é um projeto extensionista desenvolvido como MVP (Minimum Viable Product) focado exclusivamente no **front-end** para desktop.

---

## 🎯 Conceito da Plataforma

### Para Candidatos
- Cadastro completo com dados pessoais, experiência e habilidades
- Perfil visível para empresas recrutadoras
- Sem necessidade de procurar e se candidatar a vagas
- Receber propostas de empresas interessadas

### Para Empresas
- Busca ativa de candidatos com filtros avançados
- Visualização de perfis completos
- Contato direto com candidatos qualificados
- Economia de tempo no processo de recrutamento

---

## 🖥️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool moderna e rápida
- **React Router DOM** - Navegação entre páginas
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Ícones modernos
- **Context API** - Gerenciamento de estado global

---

## 📁 Estrutura do Projeto

```
recrutamento-invertido/
├── src/
│   ├── components/
│   │   └── Navbar.jsx              # Navegação principal
│   ├── context/
│   │   └── AuthContext.jsx         # Contexto de autenticação
│   ├── data/
│   │   └── mockData.js             # Dados mockados
│   ├── pages/
│   │   ├── Home.jsx                # Página inicial
│   │   ├── LoginCandidato.jsx      # Login do candidato
│   │   ├── LoginEmpresa.jsx        # Login da empresa
│   │   ├── CadastroCandidato.jsx   # Cadastro do candidato
│   │   ├── DashboardCandidato.jsx  # Dashboard do candidato
│   │   ├── PerfilCandidato.jsx     # Edição de perfil
│   │   ├── DashboardEmpresa.jsx    # Dashboard da empresa
│   │   ├── BuscarCandidatos.jsx    # Busca de candidatos
│   │   └── PerfilCandidatoEmpresa.jsx # Visualização de perfil
│   ├── App.jsx                     # Componente principal
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Estilos globais
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone ou extraia o projeto**
```bash
cd recrutamento-invertido
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em modo desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Build para Produção

Para gerar os arquivos de produção:
```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

---

## 👤 Credenciais para Teste

### Candidato
- **Email:** ana.silva@email.com
- **Senha:** qualquer coisa

### Empresa
- **Email:** rh@techsolutions.com.br
- **Senha:** qualquer coisa

---

## 📱 Funcionalidades Implementadas

### Área do Candidato
- ✅ Tela de cadastro completa
- ✅ Login de candidato
- ✅ Dashboard com estatísticas
- ✅ Edição de perfil (dados básicos, experiência, formação, habilidades)
- ✅ Visualização de atividades recentes
- ✅ Sistema de progresso do perfil

### Área da Empresa
- ✅ Login de empresa
- ✅ Dashboard com métricas
- ✅ Busca de candidatos com múltiplos filtros:
  - Cargo/Área
  - Localização (Cidade/Estado)
  - Experiência mínima
  - Habilidades
  - Trabalho remoto
  - Pretensão salarial
- ✅ Listagem de resultados
- ✅ Visualização completa do perfil do candidato
- ✅ Informações de contato
- ✅ Sugestões de candidatos similares

---

## 🎨 Design e UX

### Paleta de Cores
- **Primary:** Tons de azul (#0ea5e9)
- **Success:** Verde
- **Warning:** Amarelo/Laranja
- **Neutral:** Escala de cinzas

### Componentes Reutilizáveis
- Botões (primary, secondary)
- Cards
- Inputs
- Layout responsivo (focado em desktop)

### Inspirações de Design
- Gupy
- LinkedIn Recruiter
- Kenoby
- Interface limpa e profissional

---

## 💾 Dados Mockados

O projeto utiliza dados mockados em `src/data/mockData.js` com:
- **5 candidatos** com perfis completos
- **1 empresa** para demonstração
- Dados realistas de experiências, formações e habilidades

---

## 🔄 Fluxo de Navegação

### Fluxo do Candidato
```
Home → Cadastro/Login → Dashboard → Editar Perfil
```

### Fluxo da Empresa
```
Home → Login → Dashboard → Buscar Candidatos → Ver Perfil Completo
```

---

## 📝 Próximas Implementações (Sugestões)

Para evoluir este MVP, considere adicionar:

### Backend
- [ ] API RESTful com Node.js/Express
- [ ] Banco de dados (PostgreSQL/MongoDB)
- [ ] Autenticação JWT
- [ ] Upload real de arquivos (currículos)

### Novas Funcionalidades
- [ ] Sistema de mensagens entre empresa e candidato
- [ ] Agendamento de entrevistas
- [ ] Notificações em tempo real
- [ ] Sistema de favoritos/salvos
- [ ] Filtros salvos para empresas
- [ ] Relatórios e analytics
- [ ] Exportação de dados
- [ ] Responsividade mobile completa

### Melhorias de UX
- [ ] Loading states
- [ ] Animações
- [ ] Feedback visual aprimorado
- [ ] Tour guiado para novos usuários
- [ ] Dark mode

---

## 🎓 Contexto Acadêmico

Este projeto foi desenvolvido como **projeto extensionista** com foco em:
- Aplicação prática de React e desenvolvimento front-end
- UX/UI design profissional
- Código limpo e organizado
- Componentização
- Gerenciamento de estado
- Roteamento de aplicações SPA

---

## 📄 Licença

Este projeto é de código aberto para fins educacionais.

---

## 👨‍💻 Autor

Projeto desenvolvido para conclusão de curso - Projeto Extensionista

---

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto, consulte a documentação do código ou entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ usando React + Vite + Tailwind CSS**
