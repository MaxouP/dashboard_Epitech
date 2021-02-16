const axios = require('axios');
const express = require('express');
const router = express.Router();

/**
 * get speedrun Leaderboard from game and category
 */
router.get('/:game/:category', async (req, res) => {
    try {
        const result = await axios.get('https://www.speedrun.com/api/v1/leaderboards/' + req.params.game + '/category/' + req.params.category)
        res.status(200);
        res.send(result.data.data);
    } catch (err) {
        res.status(err.response.status)
        console.error('Error : ', err.response.status);
        res.end();
    }
});

/**
 * get speedrun categories from game
 */
router.get('/:game', async (req, res) => {
    try {
        const result = await axios.get('https://www.speedrun.com/api/v1/games', {
            params: {
                name: req.params.game,
                embed: 'categories'
            }
        })
        res.status(200);
        res.send(result.data.data);
    } catch (err) {
        res.status(err.response.status)
        console.error('Error : ', err.response.status);
        res.end();
    }
});

module.exports = router;