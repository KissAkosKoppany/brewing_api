const { getBrewings } = require('../../models/brewings.model')

async function getAllBrewings(req, res) {
    const brewings = await getBrewings()
    return res.status(200).json(brewings)
}

module.exports = {
    getAllBrewings
}