const { getBeers, addBeer, modifyStock } = require('../../models/beers.model')

async function getAllBeers(req, res) {
    const allBeers = await getBeers()
    return res.status(200).json(allBeers)
}

async function httpAddBeer(req, res) {
    const newBeer = req.body
    await addBeer(newBeer)
    return res.status(201).json(newBeer)
}

async function httpModifyStock(req, res) {
    const newBeer = req.body
    await modifyStock(newBeer)
    return res.status(201).json(newBeer)
}


module.exports = {
    getAllBeers,
    httpAddBeer,
    httpModifyStock
}