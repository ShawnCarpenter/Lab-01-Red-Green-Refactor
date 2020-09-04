

const fetch = require('node-fetch');
const fetchQuote = async() => {
  const res = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.json());
    
  return res[0];
};

module.exports = { fetchQuote };

