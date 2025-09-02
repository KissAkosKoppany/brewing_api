const { getBeers } = require('../../models/beers.model')

async function getAllBeers(req, res) {
    const allBeers = await getBeers()
    return res.status(200).json(allBeers)
}

module.exports = {
    getAllBeers
}