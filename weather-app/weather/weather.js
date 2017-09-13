const request = require('request')


function getWeather(lat, lng, cb){
    request({
        method: 'GET',
        url: `https://api.darksky.net/forecast/9e39277abba188bd215d1329cac43f30/${lat},${lng}`,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            cb(undefined, {
                temp: body.currently.temperature,
                feelsLike: body.currently.apparentTemperature
            }) 
        } else {
            cb('Unable to fetch the weather');
        }
    })
}

module.exports = {getWeather}