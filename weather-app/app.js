require('dotenv').config()
const request = require('request');
const googleKey = process.env.googleKey;
const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=215%2010th%20Ave%20E%20Seattle%20WA%2098102&key=AIzaSyDnthqGPVot20fUGXfndFljShWNFSm_14k'

request({
    url: url,
    json: true
}, function (error, response, body) {
    console.log(body.results[0].formatted_address);
    console.log(body.results[0].geometry.location.lat);
    console.log(body.results[0].geometry.location.lng); 
});