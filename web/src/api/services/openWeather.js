const axios = require('axios');
const env = require('../index');
const openWeather = env.endpoint + '/weather/';

async function getWeatherFromCityName(cityName) {
    try {
        const res = await axios.get(openWeather + cityName)
        return res.data;
    } catch (err) {
        console.error('Error', err);
    }
}

module.exports = { getWeatherFromCityName };