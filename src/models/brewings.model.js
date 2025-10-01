const { client } = require('../pg')

async function getBrewings() {
    const res = await client.query("select * from brewings;")
    return res.rows
    // console.log(res.rows)
}

async function addBrewing(newBrewing) {

    const query = {
        text: "INSERT INTO brewings(beer_name, brew_date, preboil_gr, original_gr, yeast_type, final_gravity, abv, cold_hop_date, cold_hop_length, bottling_date, bottles_filled, sugar_per_bottle, preboil_v, postboil_v, water_chemistry) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)",
        values: [newBrewing.beer_name, newBrewing.brew_date, newBrewing.preboil_gr, newBrewing.original_gr, newBrewing.yeast_type, newBrewing.final_gravity, newBrewing.abv, newBrewing.cold_hop_date, newBrewing.cold_hop_length, newBrewing.bottling_date, newBrewing.bottles_filled, newBrewing.sugar_per_bottle, newBrewing.preboil_v, newBrewing.postboil_v, newBrewing.water_chemistry]
    }

    await client.query(query)
}

module.exports = {
    getBrewings,
    addBrewing
};