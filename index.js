const fetch = require('node-fetch');

fetch('https://api.github.com')
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
