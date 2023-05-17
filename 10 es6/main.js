//Template Literals
const firstName = 'John'
const lastName = 'Smith'

console.log(`Hello ${firstName} ${lastName}`);

//Destructuring 
const [fruit1, fruit2] = ['apple', 'orange']

console.log(fruit1);

//Object Literal
const {city, state} = {
    city: 'Austin',
    state: 'Texas'
}

console.log(city);

//For of loop
const incomes = [10000, 20000, 30000]

for (let i of incomes) {
    console.log(`${i} is too high`);
}

//Spread operator
const num = [4, 5, 6]
console.log(1, 2, 3, ...num, 7, 8);

const food = {x: 'pizza'}
const game = {y: 'pokemon'}
const favStuff = {...food, ...game}
console.log(favStuff);

//Rest operator
function sum(...nums) {
    let total = 0
    for (const x of nums) total += x
    return total
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6));

//Arrow Functions
const add = (nums) => nums.reduce((x, y) => x + y)
console.log(add(incomes));

//Default Params
const fullName = (first = 'Jim', last) => {
    return `Hello ${first} ${last}`
}
console.log(fullName(undefined, lastName));

//Array.includes() 
console.log(num.includes(5));
console.log(num.includes(40));