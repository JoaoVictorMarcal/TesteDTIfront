# Desafio de Estágio Full Stack - Gerenciador de Leads (Front-End)

Este projeto é a interface de front-end (SPA) para o Desafio de Estágio Full Stack. O objetivo foi criar uma interface reativa para gerenciar Leads 
(convites de trabalho), consumindo uma API .NET separada.

A aplicação permite ao usuário visualizar leads Convidados (Invited) e Aceitos (Accepted) em abas distintas, e interagir com eles.

##  Screenshots

**Aba Invited** (mostrando os leads com status 'novo' e as ações)
<img width="1916" height="852" alt="Image" src="https://github.com/user-attachments/assets/6e9836a2-c182-4023-bd0f-93b744efda4f" />

**Aba Accepted** (mostrando os leads aceitos e seus dados de contato)
<img width="1906" height="833" alt="Image" src="https://github.com/user-attachments/assets/1a90c751-c04a-4107-9369-8277cf3b57fb" />

## Back-End (.NET API)

O back-end desta aplicação (a API .NET com MySQL e Entity Framework) está em um repositório separado. A API é responsável por toda a lógica de negócios, conexão com o banco e regras do desafio.

* **Link para o Repositório da API:** `https://github.com/JoaoVictorMarcal/TesteDTI.git`

## Tecnologias Utilizadas

* **React (Vite):** Para a construção da interface reativa (SPA).
* **Axios:** Para fazer as requisições HTTP (GET/POST) para a API .NET.
* **JavaScript (ES6+):** Com async/await para chamadas assíncronas.
* **CSS3:** Para a estilização dos componentes (usando Flexbox).
* **.NET (C#):** Utilizado para construir a API.
* **Entity Framework (EF) Core:** ORM usado para o mapeamento e comunicação com o banco de dados.
* **MySQL:** Banco de dados SQL utilizado para armazenar os dados dos leads.

## Funcionalidades Implementadas

O projeto implementa todos os requisitos principais do desafio:

**Navegação por Abas:** A interface é dividida entre Invited e Accepted.
**Busca de Dados (GET):** Ao carregar, o app busca todos os leads da API e os filtra nas abas corretas.
**Ação 'Accept' (POST):**  Move o card da aba Invited para Accepted e implementa a lógica de desconto. 
**Ação 'Decline' (POST):** Remove o card da tela e modifica o status no banco de dados.


## Autor

Feito por João Victor Marçal Barbosa 

* **LinkedIn:** ` www.linkedin.com/in/joao-victor-marcal-barbosa-aba75733b `
* **Email:** `jmarcalbarbosa@gmail.com`
* Estudante de Sistemas de Informação - IFMG Sabará
