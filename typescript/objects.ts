//objects..............................
//This is very important for real-world Playwright test data.
//an object uses named properties rather than numeric indexes.

// An object stores related information using key-value pairs.
const employee = {
    name: 'Mounika',
    role: 'QA Engineer',
    experience: 2
};

// to access value
console.log(employee.name)

// One more object concept: changing a value
// Objects can have their values changed:
const employeee = {
    name: 'Mounika',
    role: 'QA Engineer'
};

employee.role = 'Senior QA Engineer';

console.log(employee.role);

//Notice something interesting: employee is declared with const, 
// but we can still change a property inside the object. const prevents reassigning the whole object, not changing its properties


// if... with an object 
//The condition checks the value inside the object.
const employeeee = {
    name: 'Mounika',
    role: 'QA Engineer'
};

if (employee.role === 'QA Engineer') {
    console.log('QA role');
}



//type alias ...........use to explicitly define the structure of an object
//obeject of array.................
type ProductItems = {
    product: string;
    price: number;
}

const product: ProductItems[] = [
    { product: 'Laptop', price: 100000 },
    { product: "Mobile", price: 20000 },
    { product: "Mac", price: 45000 }

];
for (const items of product) {
    console.log('product:', items.product, ', price:', items.price)
    //or
    console.log(`product: ${items.product}`, `price: ${items.price}`)
}

//type in obejects

type StudentDetails = {
    name: string;
    class: number;
    age: number
}
const studentDetails: StudentDetails = {
    name: 'monika',
    class: 10,
    age: 15
}
console.log(
    `\n students name is: ${studentDetails.name}`,
    `\n student class is: ${studentDetails.class}`,
    `\n student age is: ${studentDetails.age}`
)


//inetrface........used to define structure of object............................
//Then create two test-case objects and print their IDs and statuses using a loop.
interface TestCase {
    testId: string,
    testName: string,
    status: 'skipped' | 'pass' | 'Failed',
    description?: string
}
const testCase1: TestCase = {
    testId: 'TC-001',
    testName: 'Login with valid credentials',
    status: 'pass'
}

const testCase2: TestCase = {
    testId: 'TC-002',
    testName: 'Login with Invalid credentials',
    description: 'Negative case',
    status: 'Failed'
}

for (const login of [testCase1, testCase2]) {
    console.log(`${login.testId} - ${login.testName} - ${login.description} - ${login.status}`)
    //or 
    //console.log(login)
}

// union (|)....................................................

let avb: number | string
avb = 23
avb = "67"

let xn = avb + 6
console.log(xn)

const data: number[] = [1, 2, 3,]
const data1: string[] = ['2', '4']
const data2: string[] | number[] = [2, 2,] //or
const data3: string[] | number[] = ['3', '2',]
const data4: (string | number)[] = [2, 3, '4', 'm']


