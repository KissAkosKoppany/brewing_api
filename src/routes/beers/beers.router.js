const express = require('express');

const { getAllBeers } = require('./beers.controller')

const beersRouter = express.Router();

beersRouter.get('/beers', getAllBeers);

module.exports = beersRouter;