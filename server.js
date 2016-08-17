var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var favicon = require('serve-favicon');
var basicAuth = require('basic-auth');

var app = express();


var auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  };

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === 'kate' && user.pass === 'wanless') {
    return next();
  } else {
    return unauthorized(res);
  };
};


app.use(favicon(__dirname + '/dist/images/favicon.ico'));
app.use( '/', [ auth, express.static( __dirname + "/dist" ) ] );


app.use(bodyParser.json());


var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
