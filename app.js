"use strict";
// app.ts
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var body = require("body-parser");
var path = require("path");
var models_1 = require("./models");
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
app.get('/models', function (req, res) {
    res.render('models');
});
app.post('/submit-color', function (req, res) {
    res.render('index', {
        color: req.body.color
    });
});
app.post('/submit-model', function (req, res) {
    var type = req.body.animal;
    if (type === "dog") {
        var dog = new models_1.Dog(1, "Snoopy", 6);
        res.render('models', {
            name: dog.name,
            age: dog.age,
            speak: dog.speak(),
            url: dog.url
        });
    }
    else {
        var cat = new models_1.Cat(2, "Grumpy", 10);
        res.render('models', {
            name: cat.name,
            age: cat.age,
            speak: cat.speak(),
            url: cat.url
        });
    }
    res.render('models', {
        animal: type
    });
});
// Express 4.X Middleware
app.use(function (req, res, next) { });
app.use(function (err, req, res, next) { });
app.listen(app.get('port'));
console.log("Listening on port " + app.get('port') + "...");
