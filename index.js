var http = require("http");
const PORT = process.env.PORT || 8081;

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" }, "charset=utf-8");
});

var express = require("express");
var fs = require("fs");
var app = express();

app.set("view engine", "ejs");

// jokes from https://geek-jokes.sameerkumar.website/api?format=json
app.get("/", function (req, res) {
  var data = require(__dirname + "/jokes.json");

  var bodyParser = require("body-parser");
  const { response } = require("express");
  app.use(bodyParser.urlencoded({ extended: true }));
  var id = data.length;

  console.log(id);

  res.render("pages/jokes", { jokes: data });
});

// 404 MESSAGE
app.get("*", function (req, res) {
  res.status(404).send("Sorry, requested page not found.");
});

app.listen(PORT, function () {
  console.log("This app is listening on port " + PORT);
});
