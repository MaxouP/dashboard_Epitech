// load env variables
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const weather = require('./services/openWeather/openWeather');
const github = require('./services/github/github');
const speedrun = require('./services/speedrun.com/speedrun.com');
const lichess = require('./services/lichess/lichess');
const app = express();
const admin = require("firebase-admin");
const port = process.env.PORT | 3000;

app.use(cors({ origin: true }));

const serviceAccount = require("./tek-dashboard-firebase-adminsdk.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tek-dashboard.firebaseio.com"
});

app.use('/weather', weather);
app.use('/github', github);
app.use('/speedrun', speedrun);
app.use('/lichess', lichess);


app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log('Server is running on ', port);
});

module.exports = admin;