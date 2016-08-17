var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var favicon = require('serve-favicon');

var app = express();

app.use(favicon(__dirname + '/dist/images/favicon.ico'));
app.use(express.static(__dirname + "/dist"));
app.use(bodyParser.json());


var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
