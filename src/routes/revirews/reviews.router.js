const express = require('express');

const { getAllReviews, httpAddReview } = require('./reviews.controller')

const reviewsRouter = express.Router();

reviewsRouter.get('/reviews', getAllReviews);
reviewsRouter.post('/reviews/add-review', httpAddReview)

module.exports = reviewsRouter;