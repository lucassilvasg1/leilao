const express = require('express');
const routes = express.Router();

const LanceController = require('./controllers/LanceController');

routes.get('/lances', LanceController.index);
routes.post('/lances', LanceController.store);


module.exports = routes;