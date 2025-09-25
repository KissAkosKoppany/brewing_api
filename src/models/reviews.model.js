const { client } = require('../pg')

async function getReviews() {
    const res = await client.query("select * from reviews;")
    return res.rows
    // console.log(res.rows)
}

async function addReview(newReview) {

    const query = {
        text: "INSERT INTO reviews(rating, custom_name, comment, date, name) VALUES($1, $2, $3, $4, $5)",
        values: [newReview.rating, newReview.custom_name, newReview.comment, newReview.date, newReview.name]
    }

    await client.query(query)
}

module.exports = {
    getReviews,
    addReview
};