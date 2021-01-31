// const { alias } = require('yargs');
// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv.a, (error, results) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

const request = require('request');

request({
    url: 'http://api.openweathermap.org/data/2.5/weather?lat=48.180532&lon=11.420413&appid=d80184a6000ab237f2597638ad1e725c',
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body.main.temp);
    } else {
        console.log('unable to fetch weather');
    }
});