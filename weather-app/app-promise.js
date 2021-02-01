const yargs = require('yargs');
const axios = require('axios');
const fs = require('axios');

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
    .alias('help', 'h')
    .argv;

// TODO - read from file, ignored this file
var geocodeApiKey = ''; 
var weatherApiKey = '';

var encodedAddress = encodeURIComponent(argv.a);
var geocodeUrl = `http://api.positionstack.com/v1/forward?access_key=${geocodeApiKey}&query=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.length === 0) {
        throw new Error('unable to find address');
    }
    
    var lat = response.data.data[0].latitude;
    var lon = response.data.data[0].longitude;
    var weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`;
    console.log(response.data.data[0].name);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.main.temp
    var apparentTemperature = response.data.main.feels_like
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch((error) => {
    console.log(error);
});