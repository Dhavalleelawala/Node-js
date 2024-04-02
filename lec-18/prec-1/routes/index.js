const express = require('express');

const routes = express.Router();

const homeControllers = require('../controlles/homeControllers');
const aboutsControllers = require('../controlles/aboutsControllers');
const contectControllers = require('../controlles/contectControllers');

routes.get('/',homeControllers.index);
routes.get('/abouts',aboutsControllers.index);
routes.get('/contect',contectControllers.index);

module.exports = routes;