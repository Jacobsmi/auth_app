# Getting Started

- Setting up the database
  - Make sure you have Postgres installed locally
  - Login to postgres locally with `psql -u postgres`
  - `CREATE DATABASE dbname`
  - Create a `.env` file at the root of the directory
  - Add the database url to the `.env` as shown in the `.env.example`
  - Run `npx prisma migrate dev --name init` to migrate the tables to the database
  - Run `npx prisma generate` to generate the types for the client
- Setting up Auth0
  - Create an API in the Auth0 UI
  - After creating an identifier for the API in Auth0 you can set the `AUTH0_AUDIENCE` as the identifier and the `AUTH0_ISSUER` as the variable provided in the Auth0 UI 

- Run the API with `npm run dev`