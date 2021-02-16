const axios = require('axios');
const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

const githubTokenUrl = `https://github.com/login/oauth/access_token?client_id=${process.env.VUE_APP_GITHUB_ID}&client_secret=${process.env.VUE_APP_GITHUB_SECRET}`

router.get('/user/:username', async (req, res) => {
    try {
        const result = await axios.get('https://api.github.com:/users/' + req.params.username + '/repos')
        res.status(200);
        res.send(result.data);
    } catch (err) {
        res.status(err.response.status)
        console.log(err);
        console.error('Error : ', err.response.status);
        res.end();
    }
});

router.get('/lastcommit/:firebaseId/:repo', async (req, res) => {
    try {
        const id = req.params.firebaseId;
        const repo = req.params.repo;
        // two await (one for collection, one for data())
        const userData = await (await admin.firestore().collection('users').doc(id).get()).data();
        if (!userData) throw res.send({ error: 'Firebase user not found' });
        res.status(200);
        if (!userData.githubCode) res.send({ error: 'No user code. Please login via OAuth on the platform' });
        else {
            var token = userData.githubToken;
            if (!token) { // if no token, fetch it
                const response = await axios.post(`${githubTokenUrl}&code=${userData.githubCode}`);
                const access_token = response.data.match(/access_token=(\w+)/);
                console.log(response.data);
                if (access_token && access_token[1]) {
                    token = access_token[1];
                    console.log('received token ', token);
                    console.log('Sending token to firebase...');
                    await admin.firestore().collection('users').doc(id).update({ githubToken: token });
                }
            }
            if (!token) return res.send({ error: 'Could not access github auth token.' });
            const auth = {
                headers: { Authorization: `token ${token}` }
            };
            const owner = await axios.get('https://api.github.com/user', auth);
            if (!owner || !owner.data.login) return res.send({ error: 'Could not fetch github login.' });
            const response = await axios.get(`https://api.github.com/repos/${owner.data.login}/${repo}/commits/master`, auth);
            const data = response.data;
            res.send({
                commit: data.commit,
                files: data.files,
            });
        }
    } catch (e) {
        res.status(500);
        console.error('Error : ', e);
        res.end();
    }
});

module.exports = router;