"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
var express = require("express");
var body = require("body-parser");
var path = require("path");
var app = express();
app.set('port', 443);
app.set('views', './views');
app.set('view engine', 'pug');
app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.render('index');
});
app.post('/submit', function (req, res) {
    res.render('index', {
        color: req.body.color
    });
});
// Express 4.X Middleware
app.use(function (req, res, next) { });
app.use(function (err, req, res, next) { });
app.listen(app.get('port'));
console.log("Listening on port " + app.get('port') + "...");
