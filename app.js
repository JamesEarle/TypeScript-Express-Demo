"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
var express = require("express");
var body = require("body-parser");
var path = require("path");
var models_1 = require("./models");
// var path = require('path');
var app = express();
app.set('port', 443);
app.set('views', './views');
app.set('view engine', 'pug');
app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    var student = new models_1.Student(123, "James Earle", "coding");
    res.render('index', {
        msg: Math.random() * 10
    });
});
app.post('/submit', function (req, res) {
    var x = res;
});
// Express 4.X Middleware
app.use(function (req, res, next) { });
app.use(function (err, req, res, next) { });
app.listen(app.get('port'));
console.log("Listening on port " + app.get('port') + "...");
