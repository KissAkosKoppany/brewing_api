const http = require('http');

const app = require('./app');

const dotenv = require('dotenv');

const env = process.env.NODE_ENV || "development";

dotenv.config({
    path: `.env.${env}`
});

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})

