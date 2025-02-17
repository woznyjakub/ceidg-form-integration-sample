# CEIDG form integration sample

A sample React.js form and Node.js form that integrates with the Polish Government's Business Registry public API.

## Technologies

React.js, Node.js (Nest.js), PostgreSQL, Docker, docker-compose, Vitest, Husky

This project was bootstaped with my own Nest.js starter [https://github.com/woznyjakub/nest-react-monorepo-rich-starter](https://github.com/woznyjakub/nest-react-monorepo-rich-starter)

## Prerequisites

- Docker (tested with v24.0.6)
- docker-compose (tested with v2.23.0-desktop.1)
- PNPM package manager (tested with 9.5.0)
- GNU Make (3.81, any other makefile handling program)

## Installation

- clone this repository

```
git clone https://github.com/woznyjakub/ceidg-form-integration-sample.git
```

- Copy files:

  - `api/.env.example` into `api/.env`
  - `api/.env.db.example` into `api/.env.db`
  - `/infra/main-db/.env.db.example` into `/infra/main-db/.env.db`

- Insert your CEIDG API key into API_KEY_CEIDG variable in `api/.env`

## Running the application

- Start the application by running command

```
make up
```

install local version of node_modules

(in the root directory)

```
pnpm i
```

## Running unit tests

```
cd /api
```

```
pnpm test
```

## URL Addresses

The Form's url is

```
http://localhost
```

The API's base url is

```
http://localhost/api
```

### Endpoints list

```
POST /companies + body { "taxId": string, "companyName": string, "firstName": string, "lastName": string, "address": string, "postalCode": string, "city": string }

GET /ceidg/company/:taxId
```

## Example Backend cURL Queries

```sh
curl -X POST http://localhost/api/companies \
  -H "Content-Type: application/json" \
  -d '{"taxId":"1111111111","companyName":"Company1","firstName":"Name","lastName":"Surname","address":"Słoneczna 4","postalCode":"11-111","city":"Poznań"}'

curl -X GET 'http://localhost/api/ceidg/company/1111111111'
```
