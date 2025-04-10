const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(require('../db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Exportar como función handler para Vercel
module.exports = (req, res) => {
  server(req, res);
};

