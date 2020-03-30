const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//route to initiate a session of a ong
routes.post('/sessions', SessionController.create);

// route to list ongs
routes.get('/ongs', OngController.index);
// route to create ongs
routes.post('/ongs', OngController.create);

//route to list incidents of a ong
routes.get('/profile', ProfileController.index);

// route to create incidents
routes.post('/incidents', IncidentController.create);
// route to list incidents
routes.get('/incidents', IncidentController.index);
// route to delete incidents
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;
