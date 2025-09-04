const { client } = require('../pg')

async function getBrewings() {
    const res = await client.query("select * from brewings;")
    return res.rows
    // console.log(res.rows)
}

async function addBrewings(newBrewing) {

    const query = {
        text: "INSERT INTO brewings(beer_name, brew_date, preboil_gr, postboil_gr, original_gr, water_ph, aeration_type, aeration_duration, pitching_method, yeast_type, gravity_4_days, gravity_6_days, final_gravity, worth_ph, abv, cold_hop_date, cold_hop_length, bottling_date, bottles_filled, sugar_per_bottle, preboil_v, postboil_V, water_chemistry, temp) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)",
        values: [newBrewing.beer_name, newBrewing.brew_date]
        // finish values
    }

    await client.query("")
}

module.exports = {
    getBrewings
};