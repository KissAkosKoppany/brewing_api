const { getReviews, addReview, deleteReview } = require('../../models/reviews.model')

async function getAllReviews(req, res) {
    const allReviews = await getReviews()
    return res.status(200).json(allReviews)
}

async function httpAddReview(req, res) {
    const newReview = req.body
    await addReview(newReview)
    return res.status(201).json(newReview)
}

async function httpDeleteRevirew(req, res) {
    const id = req.body
    await deleteReview(id.id)
    return res.status(201).json(id.id)
}

module.exports = {
    getAllReviews,
    httpAddReview,
    httpDeleteRevirew
}