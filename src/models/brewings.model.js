const { client } = require('../pg')

async function getBrewings() {
    const res = await client.query("select * from brewings;")
    return res.rows
    // console.log(res.rows)
}

module.exports = {
    getBrewings
};