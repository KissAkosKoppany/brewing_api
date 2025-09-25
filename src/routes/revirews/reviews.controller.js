const { getReviews, addReview } = require('../../models/reviews.model')

async function getAllReviews(req, res) {
    const allReviews = await getReviews()
    return res.status(200).json(allReviews)
}

async function httpAddReview(req, res) {
    const newReview = req.body
    await addReview(newReview)
    return res.status(201).json(newReview)
}

module.exports = {
    getAllReviews,
    httpAddReview
}