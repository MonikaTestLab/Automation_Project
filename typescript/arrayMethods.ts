
//1. Arrays in TypeScript
//array------An array stores multiple values in one variable.
//Imagine you need to store the names of five test cases.
//Instead of creating five variables, you can store them in one array.
//array starts with index 0


const arrayObj: string[] = ['Login', 'logout', 'search product']
console.log(arrayObj)
//output- itearates all the values


//loop through array..................................
const testCases: string[] = [
    "Login",
    "Logout",
    "Add Product"
];

for (const testCase of testCases) {
    console.log("Executing:", testCase);
}

// methods.................................
//length - You can find how many items are in an array using:
//includes() - checks whether an array contains a particular value.
//  push()- add last index
// pop() - delete slast index
// shift() - delete first index
// unshift() -add first index
// lenght - count the lenth oof the array

//push()
const countryNames = ['India', 'China', 'Korea']

countryNames.push('Japan')

console.log(countryNames)


//pop()
const programmingLanguages = ['Java', 'JavaScript', 'TypeScript', 'Python']

programmingLanguages.pop()

console.log(programmingLanguages)

//shift()
const programmingLanguage = ['Java', 'JavaScript', 'TypeScript', 'Python']

programmingLanguage.shift()
console.log(programmingLanguage)


//unshift
const countryName = ['India', 'China', 'Korea']

countryName.unshift('swis')
console.log(countryName)

//array pattern..........................................
const browserso: string[] = ['Chrome', 'Firefox'];

const scores: number[] = [80, 90, 95];

const resultt: boolean[] = [true, false, true];


