
//functions...................................................................
// function is reusable block of code that performs tasks

// basic function.............................................................

function print() {
    console.log('hello wolrd');
}
print()

// function with parameters........................................................
function greet(name: string) {
    console.log(`hello ${name}`)
}
greet('monika')

//function with return value......................................................

function addNum(a: number, b: number) {

    return a + b;

}
let results = addNum(1, 2)
console.log(results)
console.log(addNum(2, 3))

//optional...?.... parameter....................................................
function greets(name: string, title?: string): string {
    return title ? `Hello ${title} ${name}` : `Hello ${name}`;
}

let b = greets("Monika");
let a = greets("Monika", "Ms.");
console.log(a)
console.log(b)


//arrow function(=>)...............................................................
//Arrow functions provide another way to write functions.

const arrowFunction = (a: number, b: number): number => {
    return a + b;
}
console.log(arrowFunction(2, 3))

//or

const multiply = (a: number, b: number): number => a * b;
console.log(multiply(2, 4))