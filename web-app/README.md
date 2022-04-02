# Getting Started

- In order to get the project running you must first configure the Auth0 environment 
  - Create a SPA in the Auth0 UI
  - Create a `.env` file at the root of the directory
  - Add the variables provided by Auth0 to the `.env` file as shown in the `.env.example`
  - Audience will be set after configuring the API
- See the `README.md` in the `/api` to configure the API
- Set the `audience` variable in `index.tsx` under the `Auth0Provider` to the identifier you created for the API
- Run `npm i` to install all the dependencies
- Then run `npm start` to start the react server