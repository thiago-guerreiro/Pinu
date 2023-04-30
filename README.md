# PinU Mapa de Eventos - Projeto desenvolvido para o TCC

Para executar o projeto, é necessário ter instalado em sua máquina as seguintes ferramentas:

- Node.js 14.15.1 ou superior
- MySQL 8

## Executando o projeto

Clone o projeto deste repositório na sua máquina.
Abra um terminal no diretório raiz do projeto e digite o comando npm install. Serão instaladas as dependências:

- Express
-  Body-parser
- EJS
- MySQL2
- Sequelize

No MySQL Workbench, criar a base de dados: create database tcc_pinu;
No arquivo database/database.js, alterar a variável connection para as suas credências de usuário e senha do MySQL;
Na primeira vez que for executar a aplicação, no arquivo models/Categoria.js, descomentar a linha 11 - Categoria.sync({ force: true }), e no arquivo models/Evento.js descomentar a linha Evento.sync({ force: true }). Com isto, o Sequelize irá criar as tabelas na base de dados.
Acesse no navegador em localhost:8080