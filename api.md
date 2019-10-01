# DESAFIO BOSSABOX BACKEND

FORMAT: 1A

HOST: https://bossabox-backend.herokuapp.com

# Desafio Bossabox Backend

## Sobre

Foi criado uma api simples para gerenciar ferramentas. As tecnologis utilizadas para desenvolver este projeto foram Node.js, Express, MongoDB (utilizando o servidor do mongo na nuvem, no caso o MongoDB atlas) e JWT(JsonWebToken) para autenticação.

## Cadastrar usuário [POST /api/user]

+ Request (application/json)
    ```json 
        {
            "fullname": "John Doe",
            "email": "john.doe@mail.com",
            "password": "123456"
        }
    ```

+ Response 201 (application/json)
    ```json
        {
            "_id": "5d9368cfac95212cec170c2f",
            "fullname": "John Doe",
            "email": "john.doe@mail.com",
            "createdAt": "2019-10-01T14:55:11.722Z",
            "__v": 0
        }
    ```

## Autenticar usuário [POST /api/auth]

+ Request (application/json)
    ```json 
        {
            "email" : "luan@teste.com.br",
            "password" : "123456"
        }
    ```

+ Response 200 (application/json)
    ```json
        {
            "user": {
                "_id": "5d9368cfac95212cec170c2f",
                "fullname": "John Doe",
                "email": "john.doe@mail.com",
                "password": "$2a$10$/g/kXgVcRQ1XfvPqlOz0xu.Y3coktCjK6OpCGtkZIZmVATxgpIiQG",
                "createdAt": "2019-10-01T14:55:11.722Z",
                "__v": 0
            },
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOTM2OGNmYWM5NTIxMmNlYzE3MGMyZiIsImlhdCI6MTU2OTk0NTUxNiwiZXhwIjoxNTcwNTUwMzE2fQ.fbtsPIa-_r08V5rYfv9u1x7fWv0ASwhNdB4sVReDVug"
        }
    ```


## Listar todas as ferramentas [GET /api/tools]

+ Headers
    ```json
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOGQ5Zjc2MzIwNjg0M2RiY2QxMDA1ZSIsImlhdCI6MTU2OTU2MjUxMiwiZXhwIjoxNTcwMTY3MzEyfQ.jwkwLBNXaGehqwIxKXW8mhHOL-73yze5EDnLs5Q_hMk"
    ```

+ Response 200 (application/json)
    ```json
        [
            {
                "tags": [
                    "frontend",
                    "javascript"
                ],
                "_id": "5d8da14f2bf03e233478166b",
                "title": "ReactJS",
                "link": "https://pt-br.reactjs.org/",
                "description": "O React é uma biblioteca JavaScript de código aberto para criar interfaces de usuário. É mantido pelo Facebook, Instagram e uma comunidade de desenvolvedores individuais e outras empresas.",
                "user": "5d8d9f763206843dbcd1005e",
                "createdAt": "2019-09-27T05:42:39.560Z",
                "__v": 0
            },
            {
                "tags": [
                    "node",
                    "javascript"
                ],
                "_id": "5d8d9fd43206843dbcd1005f",
                "title": "Node.js",
                "link": "https://nodejs.org",
                "description": "Node.js é um interpretador, com código aberto, de código JavaScript de modo assíncrono e orientado a eventos, focado em migrar a programação do Javascript do lado do cliente para os servidores",
                "user": "5d8d9f763206843dbcd1005e",
                "createdAt": "2019-09-27T05:36:20.234Z",
                "__v": 0
            }
        ]
    ```

## Listar todas as ferramentas pela tag [GET /api/tools?tag=mobile]

+ Headers
    ```json
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOGQ5Zjc2MzIwNjg0M2RiY2QxMDA1ZSIsImlhdCI6MTU2OTU2MjUxMiwiZXhwIjoxNTcwMTY3MzEyfQ.jwkwLBNXaGehqwIxKXW8mhHOL-73yze5EDnLs5Q_hMk"
    ```

+ Response 200 (application/json)
    ```json
        [
            {
                "tags": [
                    "mobile",
                    "javascript",
                    "ios",
                    "android"
                ],
                "_id": "5d936b03ac95212cec170c30",
                "title": "React Native",
                "link": "https://facebook.github.io/react-native/",
                "description": "React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa.",
                "user": "5d8d9f763206843dbcd1005e",
                "createdAt": "2019-10-01T15:04:35.476Z",
                "__v": 0
            }
        ]
    ```

## Listar ferramenta por id [GET /api/tools/{_id}]

+ Headers
    ```json
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOGQ5Zjc2MzIwNjg0M2RiY2QxMDA1ZSIsImlhdCI6MTU2OTU2MjUxMiwiZXhwIjoxNTcwMTY3MzEyfQ.jwkwLBNXaGehqwIxKXW8mhHOL-73yze5EDnLs5Q_hMk"
    ```

+ Parameters
    + _id: `5d936b03ac95212cec170c30` - Identificador da ferramenta que deseja listar

+ Response 200 (application/json)
    ```json
        {
            "tags": [
                "mobile",
                "javascript",
                "ios",
                "android"
            ],
            "_id": "5d936b03ac95212cec170c30",
            "title": "React Native",
            "link": "https://facebook.github.io/react-native/",
            "description": "React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa.",
            "user": "5d8d9f763206843dbcd1005e",
            "createdAt": "2019-10-01T15:04:35.476Z",
            "__v": 0
        }
    ```


## Cadastrar ferramenta [POST /api/tools]

+ Headers
    ```json
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOGQ5Zjc2MzIwNjg0M2RiY2QxMDA1ZSIsImlhdCI6MTU2OTU2MjUxMiwiZXhwIjoxNTcwMTY3MzEyfQ.jwkwLBNXaGehqwIxKXW8mhHOL-73yze5EDnLs5Q_hMk"
    ```

+ Request (application/json)
    ```json
        {
            "title" : "React Native",
            "link" : "https://facebook.github.io/react-native/",
            "description" : "React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa.",
            "tags": ["mobile", "javascript", "ios", "android"]
        }
    ```

+ Response 201 (application/json)
    ```json    
        {
            "tags": [
                "mobile",
                "javascript",
                "ios",
                "android"
            ],
            "_id": "5d936b03ac95212cec170c30",
            "title": "React Native",
            "link": "https://facebook.github.io/react-native/",
            "description": "React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa.",
            "user": "5d8d9f763206843dbcd1005e",
            "createdAt": "2019-10-01T15:04:35.476Z",
            "__v": 0
        }
    ```

## Atualizar ferramenta [PUT /api/tools/{_id}]

+ Headers
    ```json
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOGQ5Zjc2MzIwNjg0M2RiY2QxMDA1ZSIsImlhdCI6MTU2OTU2MjUxMiwiZXhwIjoxNTcwMTY3MzEyfQ.jwkwLBNXaGehqwIxKXW8mhHOL-73yze5EDnLs5Q_hMk"
    ```

+ Parameters
    + _id: `5d936b03ac95212cec170c30` - Identificador da ferramenta que deseja atualizar

+ Request (application/json)
    ```json
        {
            "tags": ["react", "native"]
        }
    ```

+ Response 200 (application/json)
    ```json 
        {
            "tags": [
                "mobile",
                "javascript",
                "ios",
                "android",
                "react",
                "native"
            ],
            "_id": "5d936b03ac95212cec170c30",
            "title": "React Native",
            "link": "https://facebook.github.io/react-native/",
            "description": "React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa.",
            "user": "5d8d9f763206843dbcd1005e",
            "createdAt": "2019-10-01T15:04:35.476Z",
            "__v": 0
        }
    ```

## Remover ferramenta [DELETE /api/tools/{_id}]

+ Headers
    ```json
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOGQ5Zjc2MzIwNjg0M2RiY2QxMDA1ZSIsImlhdCI6MTU2OTU2MjUxMiwiZXhwIjoxNTcwMTY3MzEyfQ.jwkwLBNXaGehqwIxKXW8mhHOL-73yze5EDnLs5Q_hMk"
    ```

+ Parameters
    + _id: `5d936b03ac95212cec170c30` - Identificador da ferramenta que deseja remover

+ Response 204