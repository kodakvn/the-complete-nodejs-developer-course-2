const request = require('request');
const { alias } = require('yargs');
const yargs = require('yargs');

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

console.log(argv);

request({
    url: `http://api.positionstack.com/v1/forward?access_key=31becd37dacff8d8b87369f38bee0e51&query=${encodeURIComponent(argv.a)}`,
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.data[0].name}`);
    console.log(`Latitude: ${body.data[0].latitude}`);
    console.log(`Longitude: ${body.data[0].longitude}`);
});