const express = require('express');
const ArquivController = require('./controllers/ArquivController');

const routes = express.Router();

routes.post('/arquiv', ArquivController.store);
routes.get('/arquiv', ArquivController.index);

module.exports = routes;