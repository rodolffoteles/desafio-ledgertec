# Backend
API RESTful para gerenciamento de produtos. São aceitas apenas requisições cujo corpo é codificado em JSON e respostas retornadas são codificadas da mesma forma. 

O arquivo que contém a colletion do Postman encontra-se [aqui](Product.postman_collection.json).

## Scripts

#### `npm start`
Roda a aplicação, acesse [http://localhost:3000/products](http://localhost:3000/products) em seguida para visualizar os dados.

#### `npm test`
Executa todos os testes do projeto contidos dentro do diretório [`/tests`](/tests).

#### `npm run seed`
Preenche a base de dados com uma amostra de dados presentes dentro do diretório [`/db/seeders`](/db/seeders)

#### `npm run seed:undo`
Apaga todas as linhas da base de dados.

## Endpoints
| Verbo  | URL           | Ação                     |
|--------|---------------|--------------------------|
| GET    | /products     | Listar todos os produtos |
| GET    | /products/:id | Mostrar produto          |
| POST   | /products     | Criar novo porduto       |
| PUT    | /products/:id | Atualizar produto        |
| DELETE | /products/:id | Remover produto          |

## Produto
O objeto produto que é retornardo pela API possui nos seu atributos o identificador unico do produto, uma descrição do produto, o identificador unico da categoria a qual produto pertence e o nome da categoria.
```json
  {
    "id": 1,
    "description": "Riachuelo Mens Slim Jeans",
    "id_category": 1,
    "category": "Pants"
  }
```