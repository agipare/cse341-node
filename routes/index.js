<<<<<<< HEAD
const routes= require('express').Router();


routes.use('/contacts', require('./contacts'));

=======
const routes = require('express').Router();
const mycontrol = require('../controller/index')

routes.get('/', mycontrol.person)

>>>>>>> 6e010f92a710b2d05d76dc6df5a2647461357f3d
module.exports = routes;