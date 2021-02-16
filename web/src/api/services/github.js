const axios = require('axios');
const env = require('../index');
const githubEndpoint = env.endpoint + '/github/';
const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.VUE_APP_GITHUB_ID}&scope=notifications`;

async function getGithubRepositoryFromUserName(username) {
    try {
        const res = await axios.get(githubEndpoint + 'user/' + username)
        return res.data;
    } catch (err) {
        console.error('Error', err);
    }
}

async function getLastCommitFromFirebaseIdAndRepo(firebaseId, repo) {
    try {
        const res = await axios.get(`${githubEndpoint}lastcommit/${firebaseId}/${repo}`)
        return res.data;
    } catch (err) {
        console.error('Error', err);
    }
}

module.exports = { getGithubRepositoryFromUserName, getLastCommitFromFirebaseIdAndRepo, githubAuthUrl };