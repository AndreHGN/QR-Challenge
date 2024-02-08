# Challenge Qulture.Rocks 2024
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

Este é o projeto de desafio voltado para o Front-end para o processo seletivo da empresa Qulture.Rocks. O objetivo é desenvolver a interface de uma aplicação Web para gerenciamento de recursos humanos de forma que satisfaça cinco principais User Stories:
1. Adição de colaboradores;
2. Visualização de lista de colaboradores;
3. Visualização do perfil de um colaborador;
4. Filtragem de colaboradores;
5. Adição/visualização de comentários no perfil de um colaborador.

## Instalação

1. Com o [Node.js](https://nodejs.org/en) instalado, tenha em mãos um gerenciador de pacotes, neste caso foi utilzado o NPM v16.14.2.
2. Clone o repositório em sua máquina local:
```
git clone https://github.com/AndreHGN/QR-Challenge.git
```
3. Vá até o diretório `cd QR-Challenge` e instale as dependências:
```
npm install
```

## Execução
Se tudo der certo, basta inserir o comando a seguir para executar a aplicação localmente.

Ela ficará hospedada no endereço `http://localhost:3000/`.

```
npm run dev
```

## Stack de Tecnologias

Aqui estão as principais tecnologias utilizadas para o desenvolvimento deste app:
- [**ReactJS:**](https://react.dev/) o projeto foi desenvolvido em TypeScript sobre o framework ReactJS, uma forte ferramenta para componentização e organização dos elementos do DOM;
- [**Webpack:**](https://webpack.js.org/) como bundler do projeto, para organizar todos os plugins e assets usados na build;
- [**Styled Components:**](https://styled-components.com/) ferramenta para estilização de componentes React;
- [**Axios:**](https://axios-http.com/) usado para efetuar as requisições HTTPS REST enviadas ao servidor.

Foram usadas também algumas bibliotecas de componentes e funções, principalmente para aqueles com lógicas mais complexas:
- [**ReactRouterDom:**](https://reactrouter.com/en/main) lógica de rotas e gerenciamento de páginas;
- [**Formik:**](https://formik.org/) componentes para gerenciamento de estados em formulários controlados;
- [**ReactDataTableComponent:**](https://github.com/jbetancur/react-data-table-component) componente de tabela com lógica de paginação e ordenação dos dados;
- [**ReactToastify:**](https://github.com/fkhadra/react-toastify) componente para emitir toasts/alerts;
- [**Yup:**](https://github.com/jquense/yup) funções de validação de formulário compatíveis com Formik.

## Arquitetura

Para toda a estrutura da aplicação, foi tido como referência a metodologia do [**Atomic Design**](https://atomicdesign.bradfrost.com/chapter-2/).
Explicando resumidamente, a ideia é separar os componentes em níveis hierárquicos em que os mais baixos formam os mais altos. Foram usados cinco níveis:
1. **Atoms:** componentes mais básicos da interfaces;
2. **Molecules:** conjuntos de átomos que têm uma função simples;
3. **Organisms**: são formados por átomos, moléculas e/ou outros organismos para realizar funções mais complexas;
4. **Templates:** estruturam o layout de uma página, focando na disposição do conteúdo;
5. **Pages:** instâncias de templates com apresentação de dados reais.

### Exemplo de aplicação:

<img width="736" alt="example" src="https://github.com/AndreHGN/QR-Challenge/assets/80173402/87d944b4-c75d-4575-83a5-4ee7c88113a7">

## Testes
