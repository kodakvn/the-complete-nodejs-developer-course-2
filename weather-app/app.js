const request = require('request');

request({
    url: 'http://api.positionstack.com/v1/forward?access_key=31becd37dacff8d8b87369f38bee0e51&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC',
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.data[0].name}`);
    console.log(`Latitude: ${body.data[0].latitude}`);
    console.log(`Longitude: ${body.data[0].longitude}`);
});