// app.ts

import * as express from 'express';

let app = express();

app.set('port', 443);
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req: any, res: any) {
    res.render('index');
});

// Express 4.x
// Middleware that executes after routes
app.use(function(req: any, res: any, next: any) {});
// Error handling middleware
app.use(function(err: any, req: any, res: any, next: any) {});

app.listen(app.get('port'));
console.log("Listening on port " + app.get('port') + "...");