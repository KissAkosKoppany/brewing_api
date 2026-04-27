const { Client } = require('pg')
const dotenv = require('dotenv');

const env = process.env.NODE_ENV || "development";

dotenv.config({
  path: `.env.${env}`
});

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect().then(() => console.log("connected to db")).catch(() => console.log("can't connect to db", process.env.DATABASE_URL));

module.exports = {
    client
}