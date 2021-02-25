const hbs = require("hbs");
const path = require("path");
const express = require("express");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Kirsty Simmonds",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Kirsty Simmonds",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "We are here to help",
    title: 'Help',
    name: 'Kirsty Simmonds'
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "bad",
    location: "London",
  });
});

app.listen(3000, () => {
  console.log("Server has started on port 3000");
});
