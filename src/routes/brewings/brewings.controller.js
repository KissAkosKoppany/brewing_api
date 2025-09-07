const { getBrewings, addBrewing } = require('../../models/brewings.model')

async function getAllBrewings(req, res) {
    const brewings = await getBrewings()
    return res.status(200).json(brewings)
}

async function httpAddBrewing(req, res) {
    const newBrewing = req.body
    await addBrewing(newBrewing)
    return res.status(201).json(newBrewing)
}

module.exports = {
    getAllBrewings,
    httpAddBrewing
}