const { client } = require('../pg')

async function getBrewings() {
    const res = await client.query("select * from brewings;")
    return res.rows
    // console.log(res.rows)
}

async function addBrewing(newBrewing) {

    const query = {
        text: "INSERT INTO brewings(beer_name, brew_date, preboil_gr, postboil_gr, original_gr, water_ph, aeration_type, aeration_duration, pitching_method, yeast_type, gravity_4_days, gravity_6_days, final_gravity, worth_ph, abv, cold_hop_date, cold_hop_length, bottling_date, bottles_filled, sugar_per_bottle, preboil_v, postboil_V, water_chemistry, temp) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)",
        values: [newBrewing.beer_name, newBrewing.brew_date, newBrewing.preboil_gr, newBrewing.postboil_gr, newBrewing.original_gr, newBrewing.water_ph, newBrewing.aeration_type, newBrewing.aeration_duration, newBrewing.pitching_method, newBrewing.yeast_type, newBrewing.gravity_4_days, newBrewing.gravity_6_days, newBrewing.final_gravity, newBrewing.worth_ph, newBrewing.abv, newBrewing.cold_hop_date, newBrewing.cold_hop_length, newBrewing.bottling_date, newBrewing.bottles_filled, newBrewing.sugar_per_bottle, newBrewing.preboil_v, newBrewing.postboil_v, newBrewing.water_chemistry, newBrewing.temp]
    }

    await client.query(query)
}

module.exports = {
    getBrewings,
    addBrewing
};