# NodeReactLocal
 projeto Script 2022 usando Node JS, React

npx create-react-app my-app
cd my-app
npm start
http://localhost:3000

pre-requisito Node 14.0.0 

https://medium.com/code-prestige/como-criar-um-app-react-consumindo-um-back-end-node-com-express-5030e1727ace



HEROKU
client ID
23e66083-fd5e-4c65-97d5-d8d77d88738a

token heroku

heroku config:add \ HEROKU_OAUTH_ID=23e66083-fd5e-4c65-97d5-d8d77d88738a \ HEROKU_OAUTH_SECRET=93285fa6-051c-4165-a567-bb05295c40c9



git remote -v
git status
git remote add heroku https://git.heroku.com/young-chamber-62445.git
git add .
git commit -m "primeiro commit heroku"
git push heroku master
young-chamber-62445

bd postgresql - 

HEROKU CLI:
heroku pg:psql postgresql-globular-98838 --app young-chamber-62445

<br><br>


# Atividade-Proposta

   * [Back-End](#Back-End)
   * [Front-End](#Front-End)
   * [Endereço da Aplicação](#Endereço-da-API-React)
   * [Como executar localmente](#como-executar-localmente)
   * [Subir para o Heroku](#Subir-para-o-Heroku)
   * [Pré-Requisitos](#Pré-requisitos)   
   * [Tecnologias](#Tecnologias)
   * [Referências Bibliográficas](#Referências-Bibliográficas)
   * [Autores](#autores)


## Atividade Proposta
<body>
 <h1>Requisitos da aplicação:</h1>
 
 ## Back-end
 
<ul>
 i. O servidor deverá ser codificado em NodeJS;
 ii. O servidor deverá ser entregue rodando na nuvem – sugere-se usar o Heroku;
 iii. Persistir os dados no SGBD PostgreSQL – sugere-se usar o SGBD do Heroku ou ElephantSQL;
 iv. O login de usuário deverá ser validado no servidor. O servidor deverá gerar um token sem data de
expiração e enviar para o cliente. O cliente enviará o token a cada requisição;
 v. O BD deverá ter uma tabela para manter o cadastro de usuário formado por e-mail e senha;
 vi. O BD deverá ter uma tabela para manter as coordenadas e horário que o usuário se encontra.
 </ul>
 
<br><br>
 
  ## Front-end 
 
 <ul>
 i. A interface de usuário deverá ser codificada em React Native;
 ii. O aplicativo deverá ter as seguintes telas/funcionalidades:
<p>O usuário efetua o próprio cadastro;</p>
<p>O usuário altera o seu e-mail e senha;</p>
<p>O usuário faz o login – o token de login gerado pelo servidor deverá ser armazenado no
aplicativo e um novo login só deverá ser solicitado quando este token deixar de ser válido;
<p>O usuário poderá iniciar o rastreamento. O rastreamento deverá ser executado como tarefa,
isto é, ele roda em background mesmo quando o aplicativo está desligado.O rastreamento
faz a coleta das coordenadas atuais do dispositivo a cada 30 segundos e envia para o servidor
salvar no BD. Cada registro de localização é formado pelas coordenadas (latitude e longitude)
e data e horário da coleta;</p>
<p>O usuário poderá parar o rastreamento;</p>
<p>O usuário poderá efetuar o logout – o token de login armazenado no aplicativo deverá ser
destruído;</p>
<p>O usuário poderá visualizar sobre um mapa interativo as suas localizações em um intervalo
 de tempo fornecido pelo usuário.</p>
 </ul>
</body>

<br><br>

## Endereço da API React
<br>
(https://young-chamber-62445.herokuapp.com)

<br><br>

## Como executar localmente
```
npx create-react-app my-app
cd my-app
npm start
npm run dev
http://localhost:3000
```
<br><br>

## Subir para o Heroku

```
git remote -v
git status
git remote add heroku https://git.heroku.com/young-chamber-62445.git
git add .
git commit -m "primeiro commit heroku"
git push heroku master
```
<br><br>

## Pré-Requisitos:
Node 14.0.0 
create-react-app, Express e o pacote Concurrently.
```
npm install -g create-react-app
create-react-app node-react
npm install express --save
npm install -g concurrently
```
<br><br>

## Tecnologias
# NODE JS
<br>
O Node.js pode ser definido como um ambiente de execução Javascript server-side.

Isso significa que com o Node.js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados.

O principal motivo de sua adoção é a sua alta capacidade de escala. Além disso, sua arquitetura, flexibilidade e baixo custo, o tornam uma boa escolha para implementação de Microsserviços e componentes da arquitetura Serverless. Inclusive, os principais fornecedores de produtos e serviços Cloud já têm suporte para desenvolvimento de soluções escaláveis utilizando o Node.js.

<b><br>
 
## Heroku
<br>
Heroku é uma plataforma de nuvem baseada em contêiner totalmente gerenciada, com serviços de dados integrados e um ecossistema poderoso, para implantar e executar aplicativos modernos. A experiência do desenvolvedor Heroku é baseada em uma abordagem centrada em aplicativos para entrega de software e se integra às ferramentas e fluxos de trabalho de desenvolvedor mais populares da atualidade.
<br>
Seus aplicativos são executados em contêineres inteligentes em um ambiente de tempo de execução totalmente gerenciado, lidamos com tudo o que é crítico para a produção - configuração, orquestração, balanceamento de carga, failovers, log, segurança e muito mais.
 
<br><br>

## PostgreSQL na nuvem
<br>
Usaremos o PostgreSQL como serviço confiável e seguro com fácil configuração, criptografia em repouso, dimensionamento simples, bifurcação de banco de dados, proteção contínua e muito mais.
 
<br><br>

## Referências Bibliográficas
<br>
React - Uma biblioteca Javascript para criar interfaces de usuário.Acesso em 25/04/2022 as 14h55 pelo link: https://pt-br.reactjs.org
<br>
HEROKU - Saiba mais sobre o conjunto de produtos que ssutentam a plataforma como serviço mais inovadora da atualidade.Acesso em 25/04/2022 as 15h10 pelo link: https://www-heroku-com.translate.goog/products?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=
<br>
Node.js – O que é, como funciona e quais as vantagens.publicação do post em 05/09/2018 porlenon. Acesso em 25/04/22 ad 16hs pelo link: https://www.opus-software.com.br/node-js/
 
 <br><br>
 
## Autores
 <table align="center">
  <tr>
   <td align="center"><a href="https://github.com/RobertaAb"><img src="https://img.myloview.com.br/posters/person-icon-with-share-symbol-vector-male-profile-avatar-in-a-glyph-pictogram-illustration-700-186722185.jpg" width="100px;" alt=""/><br /><sub><b>Roberta Cristina de Abreu<br>Dev</b></sub></a><br /><a href="https://github.com/BureauTech/BureAuto/commits?author=caiquesjc" title="Dev Team">:keyboard::desktop_computer::computer_mouse:</a></td>   
    </tr>
</table>
