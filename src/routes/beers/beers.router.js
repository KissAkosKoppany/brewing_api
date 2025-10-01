const express = require('express');

const { getAllBeers, httpAddBeer, httpModifyStock } = require('./beers.controller')

const beersRouter = express.Router();

beersRouter.get('/beers', getAllBeers);
beersRouter.post('/beers/add-beer', httpAddBeer)
beersRouter.post('/beers/modify-stock', httpModifyStock)

module.exports = beersRouter;