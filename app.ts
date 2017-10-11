// app.ts
import * as express from 'express';
import {Student} from './models';

var path = require('path');
// import * as node from 'node';
// import * as path from 'path-parse';

let app = express();

app.set('port', 443);
app.set('views', './views');
app.set('view engine', 'pug');

// app.use('public');
// app.use(express.static(__dirname + 'public'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req: any, res: any) {
    let student = new Student(123, "James Earle", "coding");
    res.render('index', {
        msg: Math.random() * 10
    });
});

app.post('/submit', function(req:any, res:any) {
    let x = res;
});

// Express 4.X Middleware
app.use(function(req: any, res: any, next: any) {});
app.use(function(err: any, req: any, res: any, next: any) {});

app.listen(app.get('port'));

console.log("Listening on port " + app.get('port') + "...");