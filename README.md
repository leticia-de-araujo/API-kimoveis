# <h1>Real Estate API 🏘️</h1>

[EN/PT-BR]

[EN]
<h3>About this project</h3>

This project is a real estate CRUD API (create, read, update and delete). This API was developed with Node.js, Express, TypeScript, TypeORM and PostgreSQL.

<h3>Endpoints and Features:</h3>

| **Method** 	| **Endpoint**                          	| **Feature**                                 	|
|------------	|------------------------------------	|-------------------------------------------------	|
| POST       	| /users                             	| Creates a user                                  	|
| GET        	| /users                             	| Lists all users                                 	|
| DELETE     	| /users/:userId                     	| Soft-deletes a user using its ID as a parameter 	|
| POST       	| /login                             	| Login user and generate auth token              	|
| POST       	| /categories                        	| Creates a category                              	|
| GET        	| /categories/:categoryId/properties 	| Lists all properties belonging to a category    	|
| POST       	| /properties                        	| Creates a property                              	|
| GET        	| /properties                        	| Lists all properties                            	|
| POST       	| /schedules                         	| Schedules a visit to a property                 	|
| GET        	| /schedules/properties/:propertyId  	| Lists all bookings for a property               	|

<h3>Main technologies used:</h3>
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>TypeScript</li>
  <li>TypeORM</li>
  <li>PostgreSQL</li>
</ul>

<h4>Entity-Relationship Diagram</h4>

![image](https://conteudo-kenzie-fullstack.vercel.app/modulo_4/sprint_6/6_entrega/DER-Entrega5.png)

<h3>Author:</h3>

<b>Letícia de Araújo Nunes</b>

LinkedIn: https://www.linkedin.com/in/leticia-de-araujo-nunes/?locale=en_US

Email: leticiadearaujonunes@gmail.com

<hr></hr>

[PT-BR]
<h3>Sobre este projeto</h3>

Este projeto é uma API CRUD (create, read, update e delete) de imóveis. Esta API foi desenvolvida com Node.js, Express, TypeScript, TypeORM e PostgreSQL.

<h3>Rotas e funcionalidades:</h3>

| **Método** 	| **Endpoint**                       	| **Funcionalidade**                                        	|
|------------	|------------------------------------	|-----------------------------------------------------------	|
| POST       	| /users                             	| Cria um usuário                                           	|
| GET        	| /users                             	| Lista todos os usuários                                   	|
| DELETE     	| /users/:userId                     	| Realiza um soft delete de um usuário                      	|
| POST       	| /login                             	| Realiza o login do usuário e gera o token de autenticação 	|
| POST       	| /categories                        	| Cria uma categoria                                        	|
| GET        	| /categories/:categoryId/properties 	| Lista todos os imóveis pertencentes a uma categoria       	|
| POST       	| /properties                        	| Cria um imóvel                                            	|
| GET        	| /properties                        	| Lista todos os imóveis                                    	|
| POST       	| /schedules                         	| Agenda uma visita a um imóvel                             	|
| GET        	| /schedules/properties/:propertyId  	| Lista todos os agendamentos de um imóvel                  	|

<h3>Principais tecnologias utilizadas:</h3>
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>TypeScript</li>
  <li>TypeORM</li>
  <li>PostgreSQL</li>
</ul>

<h4>Diagrama Entidade-Relacionamento</h4>

![image](https://conteudo-kenzie-fullstack.vercel.app/modulo_4/sprint_6/6_entrega/DER-Entrega5.png)

<h3>Autora:</h3>

<b>Letícia de Araújo Nunes</b>

LinkedIn: https://www.linkedin.com/in/leticia-de-araujo-nunes/

Email: leticiadearaujonunes@gmail.com
