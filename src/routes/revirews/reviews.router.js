const express = require('express');

const { getAllReviews, httpAddReview, httpDeleteRevirew } = require('./reviews.controller')

const reviewsRouter = express.Router();

reviewsRouter.get('/reviews', getAllReviews);
reviewsRouter.post('/reviews/add-review', httpAddReview)
reviewsRouter.post('/reviews/delete-review', httpDeleteRevirew)

module.exports = reviewsRouter;