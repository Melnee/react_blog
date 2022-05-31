// import dotenv from 'dotenv';
import express from 'express';

// load the environment variables from the .env file
// dotenv.config({
//   path: '.env'
// });

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
  public app = express();
}

// initialize server app
const server = new Server();

// make server listen on some port
((port = 3001) => {
  server.app.listen(port, () => console.log(`> Listening on port 3001`));
})();
