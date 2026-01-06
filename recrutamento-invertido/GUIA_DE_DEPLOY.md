# 🚀 Guia Completo de Deploy - TalentMatch

Este guia apresenta **3 opções gratuitas** para colocar sua plataforma no ar. Escolha a que preferir!

---

## 🎯 Opção 1: Vercel (MAIS RECOMENDADA)

### ✅ Vantagens:
- **100% Gratuito** para projetos pessoais
- **Deploy automático** a cada commit
- **HTTPS incluso**
- **Domínio gratuito** (.vercel.app)
- **Extremamente rápido** (CDN global)
- **Zero configuração** para React/Vite

### 📝 Passo a Passo:

#### 1. Crie uma conta no GitHub (se não tiver)
- Acesse: https://github.com
- Clique em "Sign up"
- Siga o processo de cadastro

#### 2. Faça upload do projeto no GitHub

**Opção A - Via Interface Web:**
1. Entre no GitHub
2. Clique no "+" no canto superior direito → "New repository"
3. Nome: `recrutamento-invertido`
4. Deixe como **Public**
5. Clique em "Create repository"
6. Na página do repositório, clique em "uploading an existing file"
7. Arraste todos os arquivos do projeto (EXCETO a pasta `node_modules`)
8. Clique em "Commit changes"

**Opção B - Via Git (se souber usar):**
```bash
cd recrutamento-invertido
git init
git add .
git commit -m "Projeto inicial"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/recrutamento-invertido.git
git push -u origin main
```

#### 3. Deploy no Vercel

1. Acesse: https://vercel.com
2. Clique em "Sign Up" → Escolha "Continue with GitHub"
3. Autorize o Vercel a acessar seus repositórios
4. Na dashboard, clique em "Add New..." → "Project"
5. Encontre seu repositório `recrutamento-invertido`
6. Clique em "Import"
7. **Configurações (deixe como está):**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
8. Clique em "Deploy"
9. Aguarde 2-3 minutos ⏳
10. **Pronto!** Seu site está no ar! 🎉

Você receberá um link tipo: `https://recrutamento-invertido.vercel.app`

---

## 🎯 Opção 2: Netlify

### ✅ Vantagens:
- **Gratuito**
- **Drag & drop** (arrasta e solta)
- **HTTPS incluso**
- **Domínio gratuito** (.netlify.app)
- **Muito fácil de usar**

### 📝 Passo a Passo:

#### 1. Preparar o projeto para deploy

No terminal, dentro da pasta do projeto:
```bash
npm install
npm run build
```

Isso criará uma pasta `dist/` com os arquivos prontos para produção.

#### 2. Deploy no Netlify

**Opção A - Drag & Drop (MAIS FÁCIL):**
1. Acesse: https://app.netlify.com/drop
2. **Arraste a pasta `dist`** para a área indicada
3. Aguarde o upload
4. **Pronto!** Seu site está no ar!

Você receberá um link tipo: `https://random-name-123456.netlify.app`

**Opção B - Via GitHub (Deploy Automático):**
1. Suba o projeto no GitHub (como explicado na Opção 1)
2. Acesse: https://netlify.com
3. Clique em "Sign Up" → "GitHub"
4. Clique em "Add new site" → "Import an existing project"
5. Escolha "GitHub"
6. Selecione seu repositório
7. **Configurações:**
   - Build command: `npm run build`
   - Publish directory: `dist`
8. Clique em "Deploy"
9. Aguarde 2-3 minutos
10. **Pronto!**

---

## 🎯 Opção 3: GitHub Pages

### ✅ Vantagens:
- **100% Gratuito**
- **Integrado com GitHub**
- **HTTPS incluso**

### ⚠️ Desvantagens:
- Requer algumas configurações extras
- URL será: `https://seu-usuario.github.io/recrutamento-invertido`

### 📝 Passo a Passo:

#### 1. Instalar gh-pages

No terminal, dentro da pasta do projeto:
```bash
npm install --save-dev gh-pages
```

#### 2. Configurar o package.json

Adicione estas linhas no `package.json`:

```json
{
  "homepage": "https://SEU-USUARIO.github.io/recrutamento-invertido",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Substitua `SEU-USUARIO` pelo seu usuário do GitHub.

#### 3. Configurar o vite.config.js

Edite o arquivo `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/recrutamento-invertido/'
})
```

#### 4. Subir para o GitHub

```bash
git init
git add .
git commit -m "Projeto inicial"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/recrutamento-invertido.git
git push -u origin main
```

#### 5. Fazer o Deploy

```bash
npm run deploy
```

#### 6. Configurar GitHub Pages

1. Vá para seu repositório no GitHub
2. Clique em "Settings"
3. No menu lateral, clique em "Pages"
4. Em "Source", selecione a branch `gh-pages`
5. Clique em "Save"
6. Aguarde alguns minutos
7. Acesse: `https://SEU-USUARIO.github.io/recrutamento-invertido`

---

## 📊 Comparação das Opções

| Recurso | Vercel | Netlify | GitHub Pages |
|---------|--------|---------|--------------|
| **Facilidade** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Velocidade** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Deploy Automático** | ✅ | ✅ | ✅ |
| **Domínio Grátis** | ✅ | ✅ | ✅ |
| **Sem Configuração** | ✅ | Drag&Drop | ❌ |

---

## 🎨 Personalizando o Domínio

Todas as opções permitem usar um domínio próprio (ex: `www.talentmatch.com.br`):

### Vercel:
1. Compre um domínio (Registro.br, GoDaddy, Namecheap)
2. No painel da Vercel → Settings → Domains
3. Adicione seu domínio
4. Configure os DNS conforme instruções

### Netlify:
1. Domain settings → Add custom domain
2. Siga as instruções de configuração de DNS

### GitHub Pages:
1. Settings → Pages → Custom domain
2. Adicione seu domínio
3. Configure CNAME no seu provedor de DNS

---

## 🔄 Como Atualizar o Site Depois

### Vercel/Netlify (via GitHub):
1. Edite os arquivos no seu computador
2. Faça commit e push:
```bash
git add .
git commit -m "Atualização X"
git push
```
3. O site atualiza **automaticamente** em 1-2 minutos! 🎉

### Netlify (Drag & Drop):
1. Execute `npm run build` localmente
2. Acesse seu site no Netlify
3. Arraste a nova pasta `dist`

### GitHub Pages:
```bash
npm run deploy
```

---

## 🆘 Problemas Comuns e Soluções

### ❌ Erro: "Page not found" após deploy
**Solução:** Certifique-se de que está acessando a URL correta e que o build foi feito com sucesso.

### ❌ Página em branco
**Solução:** 
- Verifique o console do navegador (F12)
- Confirme que o `base` no `vite.config.js` está correto
- Tente fazer um hard refresh (Ctrl+Shift+R)

### ❌ Erros de build
**Solução:**
- Rode `npm install` localmente
- Teste `npm run build` localmente
- Corrija os erros antes de fazer deploy

### ❌ Rotas não funcionam (erro 404 ao recarregar)
**Solução Vercel:** Criar arquivo `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Solução Netlify:** Criar arquivo `public/_redirects`:
```
/*    /index.html   200
```

---

## 💡 Dicas Importantes

### ✅ Antes de fazer deploy:
1. **Teste localmente:** `npm run build` → `npm run preview`
2. **Remova console.logs** desnecessários
3. **Verifique se não há erros** no terminal
4. **Teste em diferentes navegadores**

### ✅ Depois do deploy:
1. **Teste todas as funcionalidades**
2. **Verifique em diferentes navegadores**
3. **Teste os links de navegação**
4. **Compartilhe com amigos para testar**

### 🎯 Para Apresentação Acadêmica:
- Use **Vercel** ou **Netlify** (mais profissional)
- Anote a URL para incluir na documentação
- Tire prints/vídeo do site funcionando
- Prepare-se para demonstrar ao vivo

---

## 📱 Compartilhando o Link

Depois do deploy, você pode:
- ✅ Adicionar no README do GitHub
- ✅ Incluir na documentação do TCC
- ✅ Compartilhar com orientador/banca
- ✅ Adicionar no LinkedIn/portfólio
- ✅ Enviar para potenciais usuários testarem

---

## 🎓 Para o Projeto Extensionista

Recomendo incluir na sua documentação:
- **Link do site funcionando**
- **Link do repositório GitHub**
- **Prints das principais telas**
- **Vídeo demonstrativo** (opcional, mas impressiona!)

---

## 🚀 Minha Recomendação

**Para o seu caso, recomendo:**

1. **Vercel** (opção principal)
   - Mais profissional
   - Deploy automático
   - Perfeito para apresentações

2. **Netlify Drag & Drop** (opção backup)
   - Se tiver problemas com GitHub
   - Super rápido de fazer

---

## 📞 Precisa de Ajuda?

Se tiver dúvidas durante o processo:
1. Consulte a documentação oficial
2. Busque no YouTube tutoriais específicos
3. Verifique se seguiu todos os passos

---

**Boa sorte com seu projeto extensionista! 🎉**

Qualquer dúvida sobre o deploy, é só perguntar!
