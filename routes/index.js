const routes= require('express').Router();

routes.use('/' , require('./swagger'));
routes.use('/contacts', require('./contacts.js'));

module.exports = routes;