export interface Person {
    pid: number;
    name: string;
    activity: string;
}

export class Student implements Person {
    public pid: number;
    public name: string;
    public activity: string;

    // Constructor is run whenever 'new' is used in object instantiation
    constructor(pid: number, name: string, activity: string) {
        this.pid = pid;
        this.name = name;
        this.activity = activity;
    }

    public greet() {
        return "Hi! I'm " + this.name + ". Lately I've been " + this.activity;
    }
}