// app.ts
//
// To compile this file first ensure TypeScript is installed (npm install typescript --save) then
// run "tsc app.ts" and all dependencies will be compiled as well.

// 0 - Import necessary external code
import * as express from 'express';
import {Student} from './models';

// 1 - Define your app instance
let app = express();

// 2 - Setup your app configuration
app.set('port', 443);
app.set('views', './views');
app.set('view engine', 'pug');

// 3 - Create application routes
app.get('/', function(req: any, res: any) {
    let student = new Student(10, "James Earle", "coding");
    res.render('index');
});

// 4 - Add any middleware
app.use(function(req: any, res: any, next: any) {});
app.use(function(err: any, req: any, res: any, next: any) {});

// 5 - Start your web server
app.listen(app.get('port'));
console.log("Listening on port " + app.get('port') + "...");