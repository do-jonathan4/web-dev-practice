//Generic Data
const firstName = 'John'
const lastName = 'Smith'

const address = {
    city: 'Austin',
    state: 'Texas'
}

const fruits = ['apple', 'orange']
const num = [4, 5, 6]

//Template Literals
console.log(`Hello ${firstName} ${lastName}`);

//Destructuring 
const [fruit1, fruit2] = fruits
console.log(fruit1);

//Object Literal
const {city, state} = address
console.log(city);

//For of loop
for (let i of num) {
    console.log(`${i} is too high`);
}

//Spread operator
console.log(1, 2, 3, ...num, 7, 8);
console.log({...address, zip: 55555});

//Rest operator
function sum(...nums) {
    let total = 0
    for (const x of nums) total += x
    return total
}
console.log(sum(1, 2, 3, ...num));

//Arrow Functions
const hello = () => {
    return "Hello World";
}
console.log(hello());

//Default Params
const fullName = (first = 'Jim', last) => {
    return `Hello ${first} ${last}`
}
console.log(fullName(undefined, lastName));

//Array.includes() 
console.log(num.includes(5));
console.log(num.includes(40));

//Let & const
const person = {}
person.firstName = 'John'

console.log(person);

//Export & import
import { data } from './export.js'
console.log(data);

//Classes 
class Animal {
    constructor (type, legs) {
        this.type = type
        this.legs = legs
        this.sound = 'Meow'
    }
    makeNoise() {
        console.log(this.sound);
    }
    description() {
        console.log(`My ${this.type} has ${this.legs} legs.`);
    }
    getData() {
        console.log(this);
    }
}
const cat = new Animal('dog', 2)
cat.makeNoise()
cat.description()
cat.getData()

//Async/Await
const apiUrl = 'https://jsonplaceholder.typicode.com/users'

function getUsers(url) {
    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json[0]))
    .catch(err => console.log('failed request'))
}
getUsers(apiUrl)