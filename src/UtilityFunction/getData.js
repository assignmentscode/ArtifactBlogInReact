const axios = require('axios');

const getData =  (url) => {
    return axios.get(url);
} 
 //getData('https://api.myjson.com/bins/hc5ye').then(console.log);
module.exports = getData;