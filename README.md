# Jet Test

Jet Test é uma sistema de importação de dados a partir de arquivos csv. A aplicação permite o upload de arquivos no formato csv, com o intuito de cadastrar uma lista 
de clientes, como também o download da lista de clientes cadastrados, em um arquivo no formato csv. O sistema permite também a realização de um CRUD nos operadores, onde 
os mesmos possuem uma lista de clientes. Ao ser realizado o upload de uma lista de clientes, eles são distribuídos de forma uniforme entre os operadores cadastrados, o 
mesmo acontece ao cadastrar ou deletar um operador, onde a lista de clientes é redistribuida.
A aplicação está em produção e pode ser acessada no seguinte [link](https://jet-test.vercel.app/).

---

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Funcionalidades](#2-funcionalidades)
- [Início Rápido](#3-início-rápido)
  - [Instalando Dependências](#31-instalando-dependências)
  - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
  - [Migrations](#33-migrations)
  - [Rodando Localmente](#34-rodando-localmente)
  - [Deploy](#35-deploy)
- [Documentação da API](#4-documentação-da-api)

## 1. Visão Geral

O projeto foi desenvolvido com o intuito de atender as demandas de um teste técnico para vaga de desenvolvedor júnior full-stack. O sistema foi desenvolvido totalmente em
typescript, onde no front-end foi utilizado ReactJs com o framework NextJs e no back-end nodeJs, com o framework express e um banco de dados MySQL. O deploy da aplicação foi
realizado no vercel, o front-end, e no railway o back-end.

Segue os links para mais informações sobre as tecnologias utilizadas:
- [ReactJs](https://pt-br.react.dev/)
- [NextJs](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React-hook-form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [NodeJs](https://nodejs.org/en)
- [ExpressJs](http://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Multer](https://github.com/expressjs/multer)

---

## 2. Funcionalidades
[ Voltar para o topo ](#tabela-de-conteúdos)

- Upload de arquivo csv: É possível realizar o upload de uma lista de clientes, em formato csv, realizando assim o cadastro de todas as informações na aplicação, como também a distribuição dos mesmos entre os operadores cadastrados;
- CRUD dos operadores: É possível criar, recuperar, atualizar e deletar os operadores da aplicação;
- Redistruição de clientes: Sempre que um operador é criado ou deletado os clientes são redistribuidos entre os operadores;
- Listagem de operadores com seus clientes: É possível listar os operados cadastrados juntamento dos clientes de sua responsabilidade;
- Exportação de dados: É possível exportar a lista de todos os clientes cadastrados em formato csv;

---

## 3. Início rápido
[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1. Instalando dependências

Clone o projeto em sua máquina:

```
  git clone git@github.com:AntonioSantosBJPE/jet-test.git
```

As dependências precisam ser instaladas dentro de cada uma das pastas do projeto (backend e frontend):
Instale as dependências do projeto  com o comando:

```
cd <nome_da_pasta> && npm install
```

### 3.2. Variáveis de Ambiente
Em seguida, é necessário configurar as variáveis de ambiente da aplicação:
#### Entre na pasta backend e crie um arquivo .env, copiando o formato do arquivo .env.example:
```
cd backend
```
```
cp .env.example .env
```
 - Crie um banco de dados MySQL
 - A variável DATABASE_URL irá receber a url do seu banco de dados MySQL
 - A variável PORT é opcional, e informa a porta que o servidor vai funcionar

#### Entre na pasta frontend e crie um arquivo .env.local, copiando o formato do arquivo .env.local.example:
```
cd frontend
```
```
cp .env.local.example .env.local
```
 - A variável NEXT_PUBLIC_BASE_URL irá receber a url do seu backend.

### 3.3. Migrations
Entre na pasta backend e execute as migrations do typeORM com o comando:

```
npm run typeorm migration:run -- -d ./src/data-source
```

### 3.4. Rodando Localmente

#### Para rodar localmente o backend, entre na pasta backend e na sequência execute o comando:
```
cd backend
```
```
npm run dev
```

#### Para rodar localmente o frontend, entre na pasta frontend e na sequência execute o comando:
```
cd frontend
```
```
npm run dev
```

### 3.5. Deploy

#### Para executar o build do backend, entre na pasta backend e na sequência execute o comando:
```
cd backend
```
```
npm run build
```

#### Para executar o build do frontend, entre na pasta frontend e na sequência execute o comando:
```
cd frontend
```
```
npm run build
```
---

## 4. Documentação da API
[ Voltar para o topo ](#tabela-de-conteúdos)

A documentação descreve os recusos que a API possuí, como Endpoints, exemplos de requisição e exemplos de retorno e foi desenvolvida utilizando o swagger.
É possivel acessar a documentação de forma local utilizando o endpoint /api-docs/ , lembrando que é necessário que o servidor esteja rodando de forma local,
para o link funcionar.
Também é possível acessar a documentação da API pelos seguinte link:
- [Jet-Test-Api-documentação](https://jet-test-production.up.railway.app/api-docs/)


---

## Autor

- [@Antonio Santos](https://github.com/AntonioSantosBJPE)



