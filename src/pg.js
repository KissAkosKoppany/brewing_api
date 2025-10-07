const { Client } = require('pg')

const client = new Client({
    //change database info after making db on mini pc
    user: "postgres",
    host: "localhost",
    database: "brewing",
    port: "5432",
    password: "test"
})

client.connect().then(() => console.log("connected to db")).catch(() => console.log("can't connect to db"))

module.exports = {
    client
}