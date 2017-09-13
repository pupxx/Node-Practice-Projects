const yargs = require('yargs')
const request = require('request')
const weather = require('./weather/weather')

const geocode = require('./geocode/geocode')

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

geocode.geocodeAddress(argv.a, (errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(results.address);
        weather.getWeather(results.lat, results.lng, (err, weatherResults) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`The temperature is ${weatherResults.temp}, but it feels like ${weatherResults.feelsLike}`);
            }
        })
    }
})

