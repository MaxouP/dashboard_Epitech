const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/rating/:username', async (req, res) => {
    try {
        const result = await axios.get('https://lichess.org/api/user/' + req.params.username + '/rating-history')
        if (result.status !== 200)
            throw result;
        res.status(200);
        res.send(result.data);

    } catch (err) {
        res.status(err.response.status)
        console.error('Error : ', err.response.status);
        res.end();
    }
});

router.get('/leaderboard/:category', async (req, res) => {
    try {
        const result = await axios.get('https://lichess.org/player/top/10/' + req.params.category, {
            headers: {
                'Accept': 'application/vnd.lichess.v3+json'
            }
        })
        if (result.status !== 200)
            throw result;
        res.status(200);
        res.send(result.data);
    } catch (err) {
        res.status(err.response.status)
        console.error('Error : ', err.response.status);
        res.end();
    }
});

module.exports = router;
// const client = {
//     client: {
//         id: 'UWL8sFDoUsQJ7ipL',
//         secret: '5CXb6NRxBr78acn5PBmAv8GOdOm5170v',
//     },
//     auth: {
//         tokenHost: 'https://oauth.lichess.org',
//         authorizePath: '/oauth/authorize',
//         tokenPath: '/oauth'
//     },
//     http: {
//         json: true
//     }
// };

// router.get('/oaut2', async (req, res) => {
//     axios.get('oauth2/callback', async (req, res) => {
//         const token = await client.getToken({
//             code: req.query.code,
//             redirect_uri: redirectUri
//         });
//         const user = await fetch('https://lichess.org/api/account', {
//             headers: {
//                 'Authorization': `Bearer ${token.token.access_token}`
//             }
//         }).then(res => res.json());
//         res.send(`<h1>Success!</h1>Your lichess user info: <pre>${JSON.stringify(user)}</pre>`);
//     });
// });