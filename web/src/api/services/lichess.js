const axios = require('axios');
const env = require('../index');
const lichessEndpoint = env.endpoint + '/lichess';

async function getLeaderboardFromCategory(category) {
    try {
        const res = await axios.get(lichessEndpoint + /leaderboard/ + category)
        return res.data;
    } catch (err) {
        console.error('Error', err);
    }
}

async function getPlayerRatingFromUsername(username) {
    try {
        const res = await axios.get(lichessEndpoint + '/rating/' + username)
        return res.data;
    } catch (err) {
        console.error('Error', err);
    }
}

module.exports = { getLeaderboardFromCategory, getPlayerRatingFromUsername };