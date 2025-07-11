var express = require("express");
var cors = require("cors");
var bodyparser = require("body-parser");
var app = express();
var DBconnection = require("./DBconnection");
var route = require("./route");
app.use(bodyparser.json());
app.use(cors());
app.use("/route", route);
var server = app.listen(8008, function () {
  console.log("done");
});
