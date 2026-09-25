# Noctis Hall — Sistema de Casa de Shows

Projeto acadêmico desenvolvido para o curso de Desenvolvimento Web do **SENAC**, criado com **Angular, TypeScript e JSON-Server**.

O **Noctis Hall** é uma aplicação web completa para gerenciamento de uma casa de shows fictícia. O projeto foi desenvolvido simulando dois ambientes distintos: uma área pública, voltada para clientes que desejam consultar eventos e realizar compras de ingressos, e uma área administrativa, destinada ao gerenciamento da operação da casa de shows.

A aplicação conta com recursos como catálogo de eventos, filtros, visualização detalhada, carrinho de compras, checkout, gerenciamento de clientes, pedidos e eventos, autenticação de funcionários e integração com o Google Maps para auxiliar o cliente a encontrar o local do evento.

---

<div align="center">

## Visão geral

### Interface e funcionalidades

<img src="docs/screenshots/vitrine.png" alt="Vitrine de eventos" width="700"/>

<img src="docs/screenshots/drawer.png" alt="Drawer de detalhes do evento" width="700"/>

<img src="docs/screenshots/carrinho.png" alt="Carrinho de compras" width="700"/>

<img src="docs/screenshots/admin-eventos.png" alt="Área administrativa — Eventos" width="700"/>

### Demonstração em vídeo

[![Demonstração do Noctis Hall](https://img.youtube.com/vi/xSyx66wSqGU/maxresdefault.jpg)](https://www.youtube.com/watch?v=xSyx66wSqGU)

</div>

---

## Sobre o projeto

O **Noctis Hall** foi desenvolvido como um projeto acadêmico com o objetivo de aplicar, em uma única aplicação, conceitos de desenvolvimento web, componentização, consumo de APIs, gerenciamento de estado, formulários, navegação entre páginas e organização de uma aplicação Angular.

A proposta foi simular o funcionamento de uma casa de shows desde a perspectiva do cliente até as rotinas administrativas internas.

### Experiência do cliente

Na área pública, o usuário pode navegar pelos eventos disponíveis, utilizar filtros para encontrar apresentações de seu interesse e abrir um **drawer lateral** com informações detalhadas sobre cada evento.

Após escolher um evento, é possível adicionar ingressos ao carrinho, controlar a quantidade desejada e finalizar a compra através do checkout. Durante esse processo, o cliente é cadastrado automaticamente no sistema.

A página de detalhes também conta com um **mapa de rotas integrado ao Google Maps**, permitindo visualizar a localização do evento e auxiliar no deslocamento até o local.

### Área administrativa

A aplicação também possui uma área restrita destinada aos funcionários da casa de shows.

Após o login, o funcionário pode acessar diferentes módulos administrativos para controlar os dados utilizados pela aplicação. O sistema permite realizar operações de **CRUD de eventos e clientes**, além de consultar e registrar pedidos manualmente.

A interface administrativa conta ainda com uma **sidebar retrátil e navegação categorizada**, permitindo organizar os diferentes recursos disponíveis no sistema.

### Objetivo acadêmico

Mais do que representar visualmente uma casa de shows, o projeto foi utilizado para colocar em prática conceitos estudados durante o curso, principalmente relacionados à construção de aplicações web utilizando Angular e TypeScript.

A estrutura foi organizada buscando separar responsabilidades entre componentes, serviços e demais partes da aplicação, enquanto o **JSON-Server** foi utilizado como uma API fake para simular a comunicação com um backend durante o desenvolvimento.

---

## Principais funcionalidades

| Área Pública                           | Área Administrativa       |
| -------------------------------------- | ------------------------- |
| Vitrine de eventos com filtros         | CRUD completo de Eventos  |
| Drawer com detalhes do evento          | CRUD completo de Clientes |
| Carrinho de compras                    | Gerenciamento de Pedidos  |
| Controle de quantidade de ingressos    | Registro manual de vendas |
| Checkout com cadastro automático       | Login de Funcionários     |
| Mapa de rotas integrado ao Google Maps | Sidebar retrátil          |
| Navegação entre páginas                | Navegação categorizada    |

---

## Tecnologias utilizadas

* **Angular 19** — Framework principal da aplicação
* **TypeScript 5.7** — Linguagem utilizada no desenvolvimento
* **Standalone Components** — Arquitetura de componentes do Angular
* **JSON-Server** — API fake utilizada durante o desenvolvimento
* **Google Maps Embed API** — Integração do mapa de rotas
* **RxJS** — Programação reativa e gerenciamento de fluxos de dados
* **Angular SSR** — Server-Side Rendering

---

## Como rodar o projeto

### Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

* Node.js 18+
* Angular CLI 19
* JSON-Server

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

> **Essa configuração só é necessária caso você queira utilizar o mapa integrado do Google Maps.** Se não precisar desse recurso, pode seguir diretamente para a etapa de execução da aplicação.

#### 1. Gere sua chave no Google Cloud Console

Acesse [console.cloud.google.com](https://console.cloud.google.com), crie um projeto (ou utilize um existente), ative a **Maps Embed API** e gere uma chave de API em **APIs e Serviços > Credenciais**.

#### 2. Crie o arquivo de configuração

Dentro da pasta `src`, crie a seguinte estrutura:

```text
src/
└── environments/
    └── environment.ts
```

Caso a pasta `environments` não exista, crie-a manualmente.

No arquivo `environment.ts`, adicione:

```typescript
export const environment = {
  googleMapsApiKey: 'SUA_KEY_AQUI'
};
```

Substitua `SUA_KEY_AQUI` pela chave de API que você gerou no Google Cloud Console.

#### 3. Não envie sua chave para o GitHub

O arquivo `src/environments/environment.ts` está listado no `.gitignore`, portanto sua chave configurada localmente não será versionada no repositório.

### Rodando a aplicação

Abra **dois terminais** na pasta do projeto.

**Terminal 1 — API fake:**

```bash
json-server --watch db.json
```

**Terminal 2 — Angular:**

```bash
ng serve --open
```

O parâmetro `--open` abre automaticamente a aplicação no navegador em:

http://localhost:4200

---

## Estrutura das funcionalidades

### Área Pública — `/ingressos`

* Vitrine de eventos
* Filtro por gênero musical
* Cards de eventos
* **Drawer lateral** com informações detalhadas
* Carrinho de compras
* Controle de quantidade de ingressos
* Checkout
* Cadastro automático de clientes
* **Mapa de rotas integrado ao Google Maps**

### Área Administrativa — `/login`

* Autenticação de funcionários
* **Eventos**

  * Cadastrar
  * Listar
  * Consultar
  * Editar
  * Excluir
* **Clientes**

  * Cadastrar
  * Listar
  * Consultar
  * Editar
  * Excluir
* **Pedidos**

  * Listar
  * Registrar vendas manualmente
* Sidebar retrátil
* Navegação categorizada

---

## Segurança

A API Key do Google Maps **não está versionada** neste repositório.

O arquivo `src/environments/environment.ts`, utilizado para configurar a chave localmente, está listado no `.gitignore`.

Caso queira utilizar o mapa integrado, consulte a seção **Configuração da API Key (Google Maps)** para configurar sua própria chave.

---

## Autor

Desenvolvido por **Victor Gabriel** e **Yago Santos** como projeto acadêmico para o SENAC.

[![GitHub](https://img.shields.io/badge/GitHub-Victor--Harger-181717?style=flat\&logo=github)](https://github.com/Victor-Harger/Site_CasaDeShow_Angular)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Victor%20Gabriel-0077B5?style=flat\&logo=linkedin)](https://www.linkedin.com/in/victor-gabriel-prado-harger)

[![GitHub](https://img.shields.io/badge/GitHub-Yago--Silva-181717?style=flat\&logo=github)](https://github.com/yago-silva-ads/Site_CasaDeShow_Angular)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yago%20Santos%20Silva-0077B5?style=flat\&logo=linkedin)](https://www.linkedin.com/in/yago-santos-silva-aa3233245)
