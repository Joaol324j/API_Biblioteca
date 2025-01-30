# 📚 Aplicação Full Stack - Gerenciador de Livros

Este projeto é um gerenciador de livros desenvolvido como uma aplicação full stack, utilizando React no frontend e Node.js com Express no backend. O objetivo do sistema é permitir que administradores possam gerenciar um catálogo de livros, adicionando, editando e removendo registros de forma eficiente. O banco de dados é gerenciado pelo PostgreSQL, utilizando Sequelize para facilitar a comunicação com o backend.

## 🚀 Tecnologias Utilizadas

### Frontend:
- React: Biblioteca para construção de interfaces de usuário.
- Bootstrap: Framework CSS para estilização e responsividade.
- Axios: Cliente HTTP para requisições assíncronas.
- React Router: Gerenciamento de rotas no React.
- Vite: Ferramenta de construção e desenvolvimento para aplicações web.

### Backend:
- Node.js: Ambiente de execução para JavaScript no servidor.
- Express: Framework para criação de APIs em Node.js.
- PostgreSQL: Banco de dados relacional.
- Sequelize: ORM para comunicação com o banco de dados.
- Joi: Validação de dados.
- JWT (JSON Web Token): Autenticação de usuários.
- Concurrently: Execução simultânea do frontend e backend.

## 📂 Estrutura do Projeto

```
/projeto-livraria
│
├── /frontend          # Código do frontend em React
│   ├── /src           # Código-fonte da aplicação
│   └── package.json   # Dependências do frontend
│
├── /backend           # Código do backend em Node.js
│   ├── /src           # Código-fonte da aplicação
│   ├── data.sql       # Script para criação do banco de dados
│   └── package.json   # Dependências do backend
│
└── package.json       # Dependências e scripts do projeto
└── README.md          # Documentação do projeto
```

## 🖥️ Páginas da Aplicação

A aplicação possui três páginas principais:

1. **Home**: Lista todos os livros cadastrados, exibindo atributos como título, autor, preço e estoque. Os livros podem ser apresentados em uma tabela ou em formato de cards para melhor visualização.
2. **AddBook**: Permite a inclusão de novos livros no sistema. A página possui um formulário onde são inseridos os atributos obrigatórios, como título, autor, preço, gênero e ano de publicação.
3. **EditBook**: Permite modificar as informações de um livro já existente.

## 🔧 Instalação e Configuração

### Pré-requisitos:
- Node.js (versão 14 ou superior)
- PostgreSQL (versão 12 ou superior)

### Configuração do Backend

1. Navegue até a pasta do backend:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie o banco de dados utilizando o script `data.sql`:
   ```bash
   psql -U seu_usuario -d seu_banco_de_dados -f data.sql
   ```

### Configuração do Frontend

1. Navegue até a pasta do frontend:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

### Executando a Aplicação

Para rodar o frontend e o backend simultaneamente, instale o `concurrently` na raiz do projeto:
```bash
npm install concurrently --save-dev
```

Adicione o seguinte script no `package.json` da raiz do projeto:
```json
{
  "scripts": {
    "start": "concurrently \"npm run dev --prefix backend\" \"npm run dev --prefix frontend\""
  },
  "devDependencies": {
    "concurrently": "^8.2.2"
  }
}
```

Agora, inicie ambos os servidores com:
```bash
npm start
```

Para iniciar individualmente:
- **Frontend (porta 5173):**
  ```bash
  cd frontend
  npm run dev
  ```
- **Backend (porta 3001):**
  ```bash
  cd backend
  npm run dev
  ```

## 🛠 Testando com Postman

Para testar a API, use o **Postman**:

1. **Mostrar todos os livros**: Envie uma requisição **GET** para `http://localhost:3001/api/book`.
2. **Obter um livro por ID**: Envie uma requisição **GET** para `http://localhost:3001/api/book/:id`.
3. **Cadastrar um livro**: Envie uma requisição **POST** para `http://localhost:3001/api/book` com o seguinte corpo:
   ```json
   {
       "title": "Novo Livro",
       "price": 120,
       "quantity": 10,
       "author": "Autor Exemplo",
       "genre": "Ficção",
       "description": "Descrição do livro",
       "published_year": 2024
   }
   ```
4. **Editar um livro**: Envie uma requisição **PUT** para `http://localhost:3001/api/book/:id` com os atributos a serem alterados.
5. **Deletar um livro**: Envie uma requisição **DELETE** para `http://localhost:3001/api/book/:id`.

## 🔑 Autenticação com JWT

A aplicação utiliza JWT para autenticação de usuários. O fluxo básico é:
1. O usuário envia suas credenciais para o backend.
2. O backend valida as credenciais.
3. Se forem válidas, um token JWT é gerado e enviado ao frontend.
4. O frontend armazena o token e o utiliza para autenticar requisições protegidas.

## 🎯 Conclusão

Este projeto demonstra a integração entre React e Node.js para gerenciar um catálogo de livros. Com ele, administradores podem visualizar, adicionar, editar e remover livros de forma prática e eficiente. Sinta-se à vontade para expandir e modificar conforme necessário!

🚀 **Boas práticas, responsividade e organização fazem toda a diferença!**

