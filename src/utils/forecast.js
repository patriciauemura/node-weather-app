const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const access_key = 'xxxxxxxxxxxxx'; // Replace with your actual Weatherstack API access key
    const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${latitude},${longitude}&units=m`;

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather servide.', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            const data = body;
            callback(undefined, `Current temperature in ${data.location.name} is ${data.current.temperature}°C. Weather description: ${data.current.weather_descriptions[0]}`);
        }
    });
}
module.exports = forecast;