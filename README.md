# Noctis Hall — Sistema de Casa de Shows

Projeto acadêmico desenvolvido para o curso de desenvolvimento web do **SENAC**.
Aplicação completa de gerenciamento de uma casa de shows fictícia, com área pública de compra de ingressos e área privada de administração.

---

<div align="center">

## Demo

### Screenshots

<img src="docs/screenshots/vitrine.png" alt="Vitrine de eventos" width="700"/>

<img src="docs/screenshots/drawer.png" alt="Drawer de detalhes" width="700"/>

<img src="docs/screenshots/carrinho.png" alt="Carrinho de compras" width="700"/>

<img src="docs/screenshots/admin-eventos.png" alt="Área administrativa — Eventos" width="700"/>

### Vídeo

[![Demonstração do Noctis Hall](https://img.youtube.com/vi/xSyx66wSqGU/maxresdefault.jpg)](https://www.youtube.com/watch?v=xSyx66wSqGU)

</div>

---

## Demonstração

| Área Pública | Área Administrativa |
|---|---|
| Vitrine de eventos com filtros | CRUD completo de Eventos |
| Drawer de detalhes do evento | CRUD completo de Clientes |
| Carrinho de compras | Gerenciamento de Pedidos |
| Checkout com cadastro automático | Login de Funcionários |
| Mapa de rotas integrado (Google Maps) | Sidebar retrátil |

---

## Tecnologias

- **Angular 19** — Standalone Components
- **TypeScript 5.7**
- **JSON-Server** — API fake para desenvolvimento
- **Google Maps Embed API** — Mapa de rotas
- **RxJS** — Programação reativa
- **Angular SSR** — Server-Side Rendering

---

## Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- Angular CLI 19
- JSON-Server

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Victor-Harger/Site_CasaDeShow_Angular.git

# Entre na pasta
cd Site_CasaDeShow_Angular

# Instale as dependências
npm install

# Instale o JSON-Server globalmente (se ainda não tiver)
npm install -g json-server
```

### Configuração da API Key (Google Maps)

O projeto utiliza a **Google Maps Embed API** para exibir o mapa de rotas até o local do evento na página de detalhes.
Para que esse recurso funcione corretamente, você precisa gerar sua própria chave de API e configurá-la localmente.

**1. Gere sua chave no Google Cloud Console**

Acesse [console.cloud.google.com](https://console.cloud.google.com), crie um projeto (ou use um existente), ative a **Maps Embed API** e gere uma chave de API em **APIs e Serviços > Credenciais**.

**2. Crie o arquivo de environment local**

O repositório inclui um arquivo de exemplo (`environment.example.ts`) para você não precisar criar do zero.
Execute o comando abaixo para copiá-lo com o nome correto:

```bash
cp src/environments/environment.example.ts src/environments/environment.ts
```

> O arquivo `environment.ts` está no `.gitignore` — sua chave nunca será enviada ao repositório.

**3. Insira sua chave no arquivo**

Abra `src/environments/environment.ts` e substitua o valor `SUA_KEY_AQUI` pela chave que você gerou:

```typescript
export const environment = {
  googleMapsApiKey: 'SUA_KEY_AQUI' // <- substitua aqui
};
```

### Rodando a aplicação

Abra **dois terminais**:

**Terminal 1 — API fake:**
```bash
json-server --watch db.json
```

**Terminal 2 — Angular:**
```bash
ng serve --open
```

O `--open` abre o navegador automaticamente em [http://localhost:4200](http://localhost:4200).

---

## Funcionalidades

### Área Pública (`/ingressos`)
- Vitrine de eventos com filtro por gênero musical
- **Drawer lateral** com detalhes do evento ao clicar no card
- Carrinho de compras com controle de quantidade
- Checkout que cadastra o cliente automaticamente
- **Mapa de rotas** integrado para orientar o cliente até o local do evento

### Área Administrativa (`/login`)
- Autenticação de funcionários
- **Eventos** — Cadastrar, listar, consultar, editar e excluir
- **Clientes** — Cadastrar, listar, consultar, editar e excluir
- **Pedidos** — Listar e registrar vendas manualmente
- Sidebar retrátil com navegação categorizada

---

## Segurança

A API key do Google Maps **não está versionada** neste repositório.
O arquivo `src/environments/environment.ts` está listado no `.gitignore`.
Consulte a seção de configuração acima para gerar e configurar sua própria chave.

---

## Autor

Desenvolvido por **Victor Gabriel** e **Yago Santos** como projeto acadêmico para o SENAC.

[![GitHub](https://img.shields.io/badge/GitHub-Victor--Harger-181717?style=flat&logo=github)](https://github.com/Victor-Harger/Site_CasaDeShow_Angular)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Victor%20Gabriel-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/victor-gabriel-prado-harger)

[![GitHub](https://img.shields.io/badge/GitHub-Yago--Silva-181717?style=flat&logo=github)](https://github.com/yago-silva-ads/Site_CasaDeShow_Angular)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yago%20Santos%20Silva-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/yago-santos-silva-aa3233245)
