const request = require("postman-request");

const forecast = (lat, lon, callback) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=55640898add03398555695cfb221c5ed&units=metric`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services");
    } else if (body.weather.length === 0) {
      callback("No forecast found");
    } else {
      callback(
        undefined,
        `It is currently ${body.main.temp} degrees celcius, and it feels like ${body.main.feels_like} degrees celcius.`
      );
    }
  });
};

module.exports = forecast;
