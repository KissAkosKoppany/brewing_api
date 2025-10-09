const express = require('express');

const { getAllReviews, httpAddReview, httpDeleteRevirew } = require('./reviews.controller')

const reviewsRouter = express.Router();

reviewsRouter.get('/api/reviews', getAllReviews);
reviewsRouter.post('/api/reviews/add-review', httpAddReview)
reviewsRouter.post('/api/reviews/delete-review', httpDeleteRevirew)

module.exports = reviewsRouter;