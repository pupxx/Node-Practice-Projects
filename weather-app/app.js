require('dotenv').config()
const request = require('request');
const googleKey = process.env.googleKey;
const yargs = require('yargs')

const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for', 
        string: true
    }
})
.help()
.alias('help, h')
.argv;

var enAddress = encodeURIComponent(argv.a)
let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${enAddress}&key=AIzaSyDnthqGPVot20fUGXfndFljShWNFSm_14k`

request({
    url: url,
    json: true
}, function (error, response, body) {
    console.log(body.results[0].formatted_address);
    console.log(body.results[0].geometry.location.lat);
    console.log(body.results[0].geometry.location.lng); 
});