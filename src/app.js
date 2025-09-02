const express = require('express');
const beersRouter = require('./routes/beers/beers.router');
const cors = require('cors');
const brewingsRouter = require('./routes/brewings/brewings.router');
// const { client } = require('./pg')

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use(beersRouter);
app.use(brewingsRouter)

module.exports = app;