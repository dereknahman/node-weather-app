const http = require("http");

const url = `http://api.openweathermap.org/data/2.5/weather?lat=${40}&lon=${-75}&appid=55640898add03398555695cfb221c5ed&units=metric`;

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
    console.log('An error', error);
})

request.end();
