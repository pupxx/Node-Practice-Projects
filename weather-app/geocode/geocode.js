const request = require('request')

function geocodeAddress(input, callback){
    var enAddress = encodeURIComponent(input)
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${enAddress}&key=AIzaSyDnthqGPVot20fUGXfndFljShWNFSm_14k`

    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (error) {
            callback('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            })
        }
    });
}

module.exports = {geocodeAddress}