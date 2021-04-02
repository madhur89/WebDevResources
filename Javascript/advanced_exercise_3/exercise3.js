// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

const a = 'test2';
let b =  true;
let c = 789;

// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    ey
    eColor  : "blue"
};
let{player, firstName, lastName, age, ey, eColor} = person;

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

let{player, firstName, lastName, age, ey, eColor} = person;


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};
let { a, b, c} = okObj;


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
const message2 = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???? `;


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}
function age(age = 20){
  return `${age}`;
}
// Symbol
// Create a symbol: "This is my first Symbol"

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}