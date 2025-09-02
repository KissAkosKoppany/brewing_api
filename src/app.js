const express = require('express');
const beersRouter = require('./routes/beers/beers.router');
const cors = require('cors');
// const { client } = require('./pg')

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use(beersRouter);

module.exports = app;