const express = require('express');

const { getAllBeers, httpAddBeer, httpModifyStock } = require('./beers.controller')

const beersRouter = express.Router();

beersRouter.get('/api/beers', getAllBeers);
beersRouter.post('/api/beers/add-beer', httpAddBeer)
beersRouter.post('/api/beers/modify-stock', httpModifyStock)

module.exports = beersRouter;