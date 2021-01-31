const request = require('request');

var geocodeAddress = (address, callback) => {
    request({
        url: `http://api.positionstack.com/v1/forward?access_key=31becd37dacff8d8b87369f38bee0e51&query=${encodeURIComponent(address)}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('unable to connect to api');
        } else if (body.data.length == 0) {
            callback('unable to find address');
        } else {
            callback(undefined, {
                address: body.data[0].name,
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude
            });
        }
    });
}

module.exports = {
    geocodeAddress
};