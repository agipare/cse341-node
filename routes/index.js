const routes = require('express').Router();
const mycontrol = require('../controller/index');

routes.get('/',mycontrol);

module.exports = routes;
