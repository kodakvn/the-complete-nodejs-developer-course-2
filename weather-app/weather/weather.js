const request = require('request');

var getWeather = (lat, lon, callback) => {
    request({
        url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d80184a6000ab237f2597638ad1e725c`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.main.temp,
                apparentTemperature: body.main.feels_like
            });
        } else {
            callback('unable to fetch weather');
        }
    });
};


module.exports = {
    getWeather
};