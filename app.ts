// app.ts

import * as body from "body-parser";
import * as express from "express";
import * as path from "path";

import {Cat, Dog} from "./models";

const app: any = express();

app.set("port", 443);
app.set("views", "./views");
app.set("view engine", "pug");

app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req: any, res: any): void => {
    res.render("index");
});

app.get("/models", (req: any, res: any): void => {
    res.render("models");
});

app.post("/submit-color", (req: any, res: any): void => {
    res.render("index", {
        color: req.body.color
    });
});

app.post("/submit-model", (req: any, res: any): void => {
    const type: string = req.body.animal;

    if (type === "dog") {
        const dog: Dog = new Dog(1, "Snoopy", 6);
        res.render("models", {
            age: dog.age,
            name: dog.name,
            speak: dog.speak(),
            url: dog.url
        });
    } else {
        const cat: Cat = new Cat(2, "Grumpy", 10);
        res.render("models", {
            age: cat.age,
            name: cat.name,
            speak: cat.speak(),
            url: cat.url
        });
    }

    res.render("models", {
        animal: type
    });
});

// express 4.X Middleware
app.use(function (req: any, res: any, next: any): void { });
app.use(function (err: any, req: any, res: any, next: any): void { });

app.listen(app.get("port"));

console.log("Listening on port " + app.get("port") + "...");
