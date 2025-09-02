const { client } = require('../pg')

async function getBeers() {
    const res = await client.query("select * from beers;")
    return res.rows
    // console.log(res.rows)
}

module.exports = {
    getBeers
};