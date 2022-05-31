import express from 'express';

// dotenv.config({
//   path: '.env'
// });

/**
 * Express server application class.
 * @description May later contain the routing system, once routes file is made consistent with this design philosophy
 */
class Server {
  public app = express();
}

const server = new Server();

((port = 3001) => {
  server.app.listen(port, () => console.log(`Listening on port: ${port}`));
})();
