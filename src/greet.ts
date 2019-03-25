export function greeter(person: string) {
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    return `${person}`
}

export function sum(a: number, b: number) {
    a = a + a;
    b = b + b;
    a = a + a;
    b = b + b;
    a = a + a;
    b = b + b;
    a = a + a;
    b = b + b;
    a = a + a;
    b = b + b;
    a = a + a;
    b = b + b;
    a = a + a;
    b = b + b;
    a = a + a;
    b = b + b;
    return a + b;
}

export class greet {
    a: number;
    b: number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }
    doTask(): string {
        return greeter("hi") + sum(this.a, this.b).toString();
    }
}