export interface Animal {
    id: number;
    age: number;
    name: string;
    speak(): string;
}

export class Dog implements Animal {
    public id: number;
    public age: number;
    public name: string;
    public url: string = "/img/dog.jpg";

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public speak() {
        return "Woof!"
    }
}

export class Cat implements Animal {
    public id: number;
    public age: number;
    public name: string;
    public url: string = "/img/cat.jpg";
    
    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public speak() {
        return "Meow!";
    }
}