const { alias } = require('yargs');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.a, (error, addressResults) => {
    if (error) {
        console.log(error);
    } else {
        console.log(addressResults.address);
        weather.getWeather(addressResults.latitude, addressResults.longitude, (error, weatherResults) => {
            if (error) {
                console.log(error);
            } else {
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
            }
        });
    }
});