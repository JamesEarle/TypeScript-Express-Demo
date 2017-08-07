"use strict";
// app.ts
exports.__esModule = true;
var express = require("express");
var models_1 = require("./models");
var app = express();
app.set('port', 443);
app.set('views', './views');
app.set('view engine', 'pug');
app.get('/', function (req, res) {
    var me = new models_1.Student(1234, "James", "coding");
    res.render('index', {
        msg: me.greet()
    });
});
// Express 4.x
// Middleware that executes after routes
app.use(function (req, res, next) { });
// Error handling middleware
app.use(function (err, req, res, next) { });
app.listen(app.get('port'));
console.log("Listening...");
