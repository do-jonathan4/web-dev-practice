// LOGGING OUTPUT
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

// VARIABLES - var, let, const
let age = 30;

// let can be re-assigned, const can not
age = 31;

// DATA TYPES - String, Number, Boolean, null, undefined
const name = 'Brad';
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

// Check type
console.log(typeof z);

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template literal (better)
console.log(`My name is ${name} and I am ${age}`);

