const domain = process.env.DOMAIN ? process.env.DOMAIN : '127.0.0.1';
const port = process.env.PORT | 3000;
exports.endpoint = 'http://' + domain + ':' + port;