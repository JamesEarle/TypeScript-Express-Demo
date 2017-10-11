"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
var express = require("express");
var models_1 = require("./models");
var path = require('path');
// import * as node from 'node';
// import * as path from 'path-parse';
var app = express();
app.set('port', 443);
app.set('views', './views');
app.set('view engine', 'pug');
// app.use('public');
// app.use(express.static(__dirname + 'public'));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    var student = new models_1.Student(123, "James Earle", "coding");
    res.render('index', {
        msg: Math.random() * 10
    });
});
// Express 4.X Middleware
app.use(function (req, res, next) { });
app.use(function (err, req, res, next) { });
app.listen(app.get('port'));
console.log("Listening on port " + app.get('port') + "...");
