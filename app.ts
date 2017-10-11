// app.ts
import * as express from 'express';
import * as body from 'body-parser';
import * as path from 'path';
import {Student} from './models';

let app = express();

app.set('port', 443);
app.set('views', './views');
app.set('view engine', 'pug');

app.use(body.json());
app.use(body.urlencoded({ extended : false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req: any, res: any) {
    res.render('index');
});

app.post('/submit', function(req:any, res:any) {
    res.render('index', {
        color: req.body.color
    });
});

// Express 4.X Middleware
app.use(function(req: any, res: any, next: any) {});
app.use(function(err: any, req: any, res: any, next: any) {});

app.listen(app.get('port'));

console.log("Listening on port " + app.get('port') + "...");