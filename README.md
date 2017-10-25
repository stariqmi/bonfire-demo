## Bonfire Demo App

### Overview
This application is built using Vue for the front-end and Node.js for the back-end.
The back-end uses Express as a server and Bookshelf.js/knex.js as a minimal ORM

### Run application

1. Install dependencies: `npm install`
2. Look into `knexfile.js` to set up the correct database with username and password OR edit it according to your database
3. Run migrations to set up the database schema: `knex migrate:latest`
4. Add default test data: `knex seed:run`
5. Build JavaScript (already done): `webpack`
6. Start server: `node server.js` - Default port is 3030
