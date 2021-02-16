const axios = require('axios');
const env = require('../index');
const speedrunEndpoint = env.endpoint + '/speedrun/';

async function getSpeedrunLeaderboardFromGameAndCategory(game, category) {
    try {
        const res = await axios.get(speedrunEndpoint + game + '/' + category)
        return res;
    } catch (err) {
        console.error('Error', err);
    }
}

async function getSpeedrunCategoriesFromGame(game) {
    try {
        const res = await axios.get(speedrunEndpoint + game)
        return res.data;
    } catch (err) {
        console.error('Error', err);
    }
}

module.exports = { getSpeedrunLeaderboardFromGameAndCategory, getSpeedrunCategoriesFromGame };