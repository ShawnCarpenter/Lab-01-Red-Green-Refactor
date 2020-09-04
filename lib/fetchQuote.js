const fetch = require('node-fetch');

const fetchQuote = () => fetch('http://futuramaapi.herokuapp.com/api/quotes/1').then(res => res.json()).then(json => json[0]);

module.exports = { fetchQuote };

