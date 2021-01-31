const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `http://api.positionstack.com/v1/forward?access_key=31becd37dacff8d8b87369f38bee0e51&query=${encodeURIComponent(address)}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('unable to connect to api');
            } else if (body.data.length == 0) {
                reject('unable to find address');
            } else {
                resolve({
                    address: body.data[0].name,
                    latitude: body.data[0].latitude,
                    longitude: body.data[0].longitude
                });
            }
        });
    });
};

geocodeAddress('Allach').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (error) => {
    console.log('error: ', error);
});