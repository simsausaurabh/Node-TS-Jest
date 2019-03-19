export function greeter(person: string) {
    return `${person}`
}

export function sum(a: number, b: number) {
    a = a + a;
    b = b + b;
    return a + b;
}

console.log(greeter("Tester"))