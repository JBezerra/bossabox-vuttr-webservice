- Quais ferramentas foram usadas, como e porquê, além do seu conhecimento das mesmas;
- Seu conhecimento em banco de dados, requisições HTTP, APIs REST, etc;
- Se você julgar necessário, adequado ou quiser deixar a aplicação mais completa (bônus!) você pode adicionar outras rotas, métodos, meios de autenticação com usuários, etc.

# Very Useful Tools to Remember API
## Introdução
A **Very Useful Tools to Remember** foi construída para facilitar a vida de todos aqueles que gostariam de armazenar e categorizar ferramentas úteis da web, para não se esquecer delas no futuro.

## Autorização
Todas as rotas, **exceto a de criação e autenticação de usuário**, necessitam de um token de autenticação, que comprova a validade do usuário logado.

# Sobre o projeto
## Ferramentas utilizadas
### Guidelines e o código
-  Utilizamos typescript para maior consistência e legibilidade de nosso servidor.
- Em breve resumo, o projeto faz uso de arquitetura **DDD**, **TDD** juntamente **SOLID** e **DRY**. Em nosso código, utilizamos o **ESLint** e **Prettier** com o padrão Airbnb.
### O Servidor
- Nosso servidor utiliza de **Express** como middleware de roteamento e **tsrynge** como ferramenta para injeção de dependência automática.
### Segurança
- Utilizamos variados recursos e camadas de segurança, a principal delas é a **Json Web Token** que associa cada request a um usuário único, e valida a autenticidade da requisição.
- Para maior seguraça da criptografia dos dados utilizamos **bcryptjs** para as senhas dos usuários.
- Utilizamos também **express-rate-limit** com o intuito de evitar ataques de força bruta em nossa aplicação.
- Por fim para testar a validade das regras de negócio, fazemos uso da **arquitetura TDD** e unido a biblioteca **Jest**.
### Persistência
- Como banco de dados utilzamos **PostegreSQL**, fazendo a conexão em nossa aplicação através da biblioteca **TypeORM**.
- Como suporte para a camada de limite de requisições utilizamos o banco de dados de acesso rápido **Redis**.
### Ferramentas
- Para coordernar diferentes bancos de dados em nossa máquina, fazemos uso de Docker, com um container para cada tipo de banco de dados diferente.

## Configurando o servidor
## Instando e executando localmente
## Comandos que você precisa saber