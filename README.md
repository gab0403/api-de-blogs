# Projeto API de Blogs


 ## O que foi desenvolvido
  
  Esta aplicação é uma API para a produção de conteúdo para um blog! 

  * Realização de `CRUD` de posts.

  * Endpoints que estão conectados ao banco de dados seguindo os princípios do REST;

  *  **Relação entre** `user` e `post`; 

  3. **Relação de** `posts` para `categories` e de `categories` para `posts`.


## Instale as dependêcias

```
npm install
```
 
## Formato das entidades

  O projeto  usa o `ORM Sequelize` para criar e atualizar o banco de dados. 

  
  - Uma tabela chamada **Users**, contendo dados com a seguinte estrutura:

    ```json
    {
      "id": 1,
      "displayName": "Brett Wiltshire",
      "email": "brett@email.com", // tem quer ser único
      "password": "123456",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    }
    ```
  - Uma tabela chamada **Categories**, contendo dados com a seguinte estrutura:

    ```json
    {
      "id": 18,
      "name": "News"
    }
    ```

  - Uma tabela chamada **BlogPosts**, contendo dados com a seguinte estrutura:

    ```json
    {
      "id": 21,
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "userId": 14, // Chave estrangeira, referenciando o id de `Users`
      "published": "2011-08-01T19:58:00.000Z",
      "updated": "2011-08-01T19:58:51.947Z",
    }
    ```

  - Uma tabela chamada **PostCategories**, contendo uma **chave primária composta** utilizando os dois atributos da estrutura:

    ```json
    {
      "postId": 50, // Chave primária e estrangeira, referenciando o id de `BlogPosts`
      "categoryId": 20 // Chave primária e estrangeira, referenciando o id de `Categories`
    }
    ```
    *Os dados acima são fictícios, e estão aqui apenas como exemplo*

## Tecnologias utilizadas:

![Express](https://img.shields.io/badge/-EXPRESS-green?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/-sequelize-blue?style=for-the-badge&logo=sequelize&logoColor=white)
![JWT](https://img.shields.io/badge/-JWT-lightgrey?style=for-the-badge&logo=jwt&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)


   