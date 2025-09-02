const express = require('express');

const { getAllBrewings } = require('./brewings.controller')

const brewingsRouter = express.Router();

brewingsRouter.get('/brewings', getAllBrewings);

module.exports = brewingsRouter;