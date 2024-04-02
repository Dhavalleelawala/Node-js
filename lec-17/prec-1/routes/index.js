const express = require('express');

const routes = express.Router();

const adminControllers = require('../controllers/adminControllers');

const productControllers = require('../controllers/productControllers');

const contectControllers = require('../controllers/contectControllers');

routes.get('/',adminControllers.index);
routes.get('/product',productControllers.index);
routes.get('/contect',contectControllers.index);


module.exports = routes;