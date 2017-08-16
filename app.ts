// app.ts
import * as express from 'express';

let app = express();

app.set('port', 443);
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req: any, res: any) {
    res.render('index');
});

app.use(function(req: any, res: any, next: any) {});
app.use(function(err: any, req: any, res: any, next: any) {});