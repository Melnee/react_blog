# Description

React frontend and NodeJS backend BlogPost management app.

# Current Features

- Front end layouts/navigability: Index, Show, Create, Update, Delete
- Backend Initialization
- Backend routes and controller methods (untested)
- Front end HandleDelete filter!
- Nodemon for automatic resyncing of changes

# Future Features (not yet present)

- Removal of HandleDelete filter.
- Connection between Front end functions, and backend routes, via Axios
- Verification of full MongoDB Schema functionality via CLI
- Verification of backend routes
- RTF row implementation via something like this: https://github.com/sstur/react-rte, and subsequent storage in db, as parsed string
- Dynamic date fields, stored as UTC, but displayed in local Time Zones
- Dockerization! :)
- Debugging and full implementation of Elastic UI

## Available Scripts

While in the "client" project directory, you can run:

### `npm start`

to begin the frontend (React) side of the site.

While in the "server" project directory, you can run:

### `nodemon server.ts`

to begin the backend (NodeJS) side of the site, specifically with Nodemon, for hot reloading of backend.
