const express = require('express');

const { getAllBrewings, httpAddBrewing } = require('./brewings.controller')

const brewingsRouter = express.Router();

brewingsRouter.get('/api/brewings', getAllBrewings);
brewingsRouter.post('/api/brewings/add-brewing', httpAddBrewing);

module.exports = brewingsRouter;