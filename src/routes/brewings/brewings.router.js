const express = require('express');

const { getAllBrewings, httpAddBrewing } = require('./brewings.controller')

const brewingsRouter = express.Router();

brewingsRouter.get('/brewings', getAllBrewings);
brewingsRouter.post('/brewings/add-brewing', httpAddBrewing);

module.exports = brewingsRouter;