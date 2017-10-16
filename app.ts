// app.ts

import * as express from 'express';
import * as body from 'body-parser';
import * as path from 'path';

import {Dog, Cat} from './models';

let app = express();

app.set('port', 443);
app.set('views', './views');
app.set('view engine', 'pug');

app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req: any, res: any) {
    res.render('index');
});

app.get('/models', function (req: any, res: any) {
    res.render('models');    
});

app.post('/submit-color', function (req: any, res: any) {
    res.render('index', {
        color: req.body.color
    });
});

app.post('/submit-model', function(req: any, res: any) {
    let type = req.body.animal;

    if (type === "dog") {
        let dog = new Dog(1, "Snoopy", 6);
        res.render('models', {
            name: dog.name,
            age: dog.age,
            speak: dog.speak(),
            url: dog.url
        });
    } else {
        let cat = new Cat(2, "Grumpy", 10);
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
app.use(function (req: any, res: any, next: any) { });
app.use(function (err: any, req: any, res: any, next: any) { });

app.listen(app.get('port'));

console.log("Listening on port " + app.get('port') + "...");