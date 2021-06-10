# Very Useful Tools to Remember API
## 🧐 Introdução
A **Very Useful Tools to Remember** foi construída para facilitar a vida de todos aqueles que gostariam de armazenar e categorizar ferramentas úteis da web, para não se esquecer delas no futuro.

## 🔑 Autorização
Todas as rotas, **exceto a de criação e autenticação de usuário**, necessitam de um token de autenticação, que comprova a validade do usuário logado.

# Sobre o projeto
## ⛏ Ferramentas utilizadas
### Guidelines e o código
-  Utilizamos typescript para maior consistência e legibilidade de nosso servidor.
- Em breve resumo, o projeto faz uso de arquitetura **DDD**, **TDD** juntamente **SOLID** e **DRY**, já em nosso código utilizamos o **ESLint** e **Prettier** com o padrão Airbnb. Tudo com o intuito de construir um código manutenível e robusto para uma equipe de programadores.
### O Servidor
- Nosso servidor utiliza de **Express** como middleware de roteamento e **tsrynge** como ferramenta para injeção de dependência automática, **respeitando os princípios SOLID de um código limpo**.
### Segurança
- Utilizamos variados recursos e camadas de segurança, a principal delas é a **Json Web Token** que associa cada request a um usuário único e valida a autenticidade de cada requisição.
- Para maior seguraça da criptografia dos dados utilizamos **bcryptjs** para as senhas dos usuários.
- Utilizamos também **express-rate-limit** com o intuito de evitar ataques de força bruta em nossa aplicação.
- Por fim para testar a validade das regras de negócio e a segurança de nossa aplicação em produção, fazemos uso da **arquitetura TDD** unido a biblioteca **Jest**.
### Persistência
- Como banco de dados utilzamos **PostegreSQL**, fazendo a conexão e migrations em nossa aplicação através da biblioteca **TypeORM**.
- Como suporte para a camada de segurança de limite de requisições, utilizamos o banco de dados de acesso rápido **Redis**.
### Ferramentas
- Para coordernar diferentes bancos de dados em nossa máquina, fazemos uso de Docker, com um container para cada serviço.
- Para a correta documentação de nossas rotas utilizamos o **API Blueprint**.

## 🎲 Configurando o servidor
### Variáveis Ambiente
Para configurar o servidor, você deve criar um arquivo de configuração `.env` baseado no arquivo `.env.example`.
- O JWT_APP_SECRET é responsável pelo segredo da geração de tokens JWT de nossa aplicação.
```js
APP_SECRET=
```
- Da mesma forma, você deve colocar as informações de configuração do seu banco Redis, em:
```js
REDIS_HOST=
REDIS_PORT=
REDIS_PASS=
```
### Bancos de Dados
### Configuração e instalação
Para a correta configuração dos bancos de dados, utilizaremos a ferramenta Docker, que facilitará boa parte da configuração manual que teríamos que fazer em nossa máquina local. Para tal, basta executar o comando:
```sh
docker-compose up -d
```
Após o sucesso, você possuirá 2 containers rodando em sua máquina:
- Um com **PostgreSQL** na porta 5432.
- Outro com o **Redis** na porta 6379.

### Preparando o PostgreSQL
Para preparar as tabelas do nosso PostgreSQL, faremos uso de migrations preestabelicidas em nosso projeto. Para executa-las basta digitar na pasta raiz do projeto
```sh
yarn typeorm migration:run
```
## 👨🏻‍💻 Instalando e executando localmente
Finalmente, após todo ambiente configurado, **fazeremos a instalação do nosso servidor**. Na pasta raiz do projeto devemos executa comando:
```sh
yarn install
```

E por fim, para executar a aplicação localmente, o executaremos o comando:
```sh
yarn dev:server
```
**Lembrete: o servidor estará disponível na url `localhost:3000`.**

## ⏩ Dicas rápidas
- Para os usuários do cliente HTTP **Insomnia**, deixo disponível o arquivo de importação `vuttr-insomnia.json` contendo todas as rotas configuradas.
- Para a renderização da documentação de nossas rotas, basta executar o comando:
```sh
yarn render-api
```

Para informações, dúvidas ou feedbaks? Manda no @josebezerra12.