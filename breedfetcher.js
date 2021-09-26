const request = require('request');
const url = `https://api.thecatapi.com/v1/breeds/search?q=`;
// const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  request(
    `${url}${breedName}`,
    (error, resp, body) => {
      const data = JSON.parse(body);
      // console.log(data);
      // console.log(typeof body);
      // console.log(typeof data);
      const breed = data[0].description;
      if (body === '[]') {
        callback('ERROR: invalid breed', null);
      }
      callback(null, breed);
    });
};



module.exports = { fetchBreedDescription };