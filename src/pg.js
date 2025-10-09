const { Client } = require('pg')

// const client = new Client({
//     //change database info after making db on mini pc
//     user: "susanou",
//     host: "localhost",
//     database: "brewing_db",
//     port: "5432",
//     password: "naruto"
// })

console.log(process.env.DATABASE_URL)

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect().then(() => console.log("connected to db")).catch(() => console.log("can't connect to db"))

module.exports = {
    client
}