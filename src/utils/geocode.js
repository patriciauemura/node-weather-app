const request = require('postman-request');

const key = 'pk.eyJ1IjoicGF0cmljaWF1ZW11cmE1MyIsImEiOiJjbWMwZ2ltYTUwMXpjMnlvaGt2MGdzejdlIn0.TtIjDoMpNPN_CocwNuJF7Q'

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${key}`;
    
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to geocoding service!', undefined);
        } else if (body.features.length === 0) {
            callback('No location found for the specified address.', undefined);
        } else {
            const data = body.features[0];
            callback(undefined, {
                latitude: data.center[1],
                longitude: data.center[0],
                location: data.place_name
            });
        }
    });
}

module.exports = geocode;