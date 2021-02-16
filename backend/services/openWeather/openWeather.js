const apiKey = 'a6822a695b297a4f6e28038afadf0398';
const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/:cityName', async (req, res) => {
    try {
        const result = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + req.params.cityName + '&appid=' + apiKey, {
            params: {
                units: 'metric',
            }
        })
        if (result.status !== 200)
            throw result;
        res.status(200);
        res.send(result.data);
    } catch (err) {
        res.status(err.response.status).send(err);
        console.error('Error : ', err.response.status);
    }
});

module.exports = router;