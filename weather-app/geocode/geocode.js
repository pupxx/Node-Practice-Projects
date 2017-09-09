const request = require('request')

function geocodeAddress(input){
    var enAddress = encodeURIComponent(input)
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${enAddress}&key=AIzaSyDnthqGPVot20fUGXfndFljShWNFSm_14k`

    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (error) {
            console.log('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            console.log('Unable to find that address');
        } else {
            console.log(body.results[0].formatted_address);
            console.log(body.results[0].geometry.location.lat);
            console.log(body.results[0].geometry.location.lng);
        }
    });
}

module.exports = {geocodeAddress}