const { client } = require('../pg')

async function getBeers() {
    const res = await client.query("select * from beers;")
    return res.rows
    // console.log(res.rows)
}

async function addBeer(newBeer) {
    const query = {
        text: "INSERT INTO beers(name, description, alcohol, color_scheme, link, stock, ibu, type, images, litrage, banner_img) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
        values: [newBeer.name, newBeer.description, newBeer.alcohol, newBeer.color_scheme, newBeer.link, newBeer.stock, newBeer.ibu, newBeer.type, newBeer.images, newBeer.litrage, newBeer.banner_img] 
    }

    await client.query(query)
}

async function modifyStock(beer) {
    const query = {
        text: "UPDATE beers SET stock = $1 WHERE name = $2",
        values: [beer.stock, beer.name]
    }

    await client.query(query)
}

module.exports = {
    getBeers,
    addBeer,
    modifyStock
};