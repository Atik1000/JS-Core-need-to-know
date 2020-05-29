//==================================================variable declare======================================//
// var,let,const

var name='atik foysal'
console.log(name)
name='jannatul ferdos Shanta'
console.log(name)

//init var
var age;
console.log(age)
age=22;
console.log(age)

//let
let job;
job='student';
console.log(job)
job='teacher';
console.log(job)

//const 
const language='jS'
console.log(language)
//can't reassign 
language='python'

// Have to assign a value
// const greeting;

//object
const person={
    name:'shanta',
    age:18,
};
person.name ='jannatul';
person.age=20
console.log(person)

//array
const numbers=[1,2,3,4,5,6]
numbers.push(7)
console.log(numbers)

//=======================================================Data type================================================//
// PRIMITIVE

// String
var name = 'John Doe';
console.log(typeof name)
// Number
var age = 45;
console.log(typeof age)
// Boolean
const hasKids = true;
console.log(typeof hasKids)
// Null
const car = null;
console.log(typeof car)
// Undefined
let test;
console.log(typeof test)
// Symbol
const sym = Symbol();
console.log(typeof sym)


// REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music',6,8];
console.log(typeof hobbies)

// Object literal
const address = {
    city: 'Boston',
    state: 'MA'
}
console.log(typeof address)
const today = new Date();
console.log(today);
console.log(typeof today);

//=======================================================Math object===========================================//

const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);

console.log(val);


//-----------------------------------------------Array----------------------------------------------------===========//

// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {
    a: 1,
    b: 1
}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

//MUTATING ARRAYS
// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1,3);
// Reverse
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();

// // Use the "compare function"
 val = numbers.sort(function(x, y){
   return x - y;
 });

// Reverse sort
 val = numbers.sort(function(x, y){
   return y - x;
 });
// Find
function over50(num) {
    return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);

//==================================================object literal================================================//

const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 36,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function () {
        return 2017 - this.age;
    }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [{
        name: 'John',
        age: 30
    },
    {
        name: 'Mike',
        age: 23
    },
    {
        name: 'Nancy',
        age: 40
    }
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}


//===================================conditional statement & operator=============================================//


let id = 100;

// EQUAL TO
if(id == 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// // NOT EQUAL TO
if(id != 101){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if(id === 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if(id !== 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Test if undefined
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// GREATER OR LESS THAN
if(id <= 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// IF ELSE

const color = 'yellow';

if(color === 'red'){
  console.log('Color is red');
} else if(color === 'blue'){
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

// LOGICAL OPERATORS

const name = 'Steve';
const age = 70;

// AND &&
if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if (id === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');

if (id === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');


//=====================================switch case===========================================//
const color = 'yellow';

switch (color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

let day;

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);

//==================================function declare===========================//



function greet(firstName = 'John', lastName = 'Doe') {
    if(typeof firstName === 'undefined'){firstName = 'John'}
     if(typeof lastName === 'undefined'){lastName = 'Doe'}
    console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

 console.log(greet());

// FUNCTION EXPRESIONS

const square = function (x = 3) {
    return x * x;
};

console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function(){
  console.log('IIFE Ran..');
})();

(function(name){
  console.log('Hello '+ name);
})('Brad');

// PROPERTY METHODS

const todo = {
    add: function () {
        console.log('Add todo..');
    },
    edit: function (id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function () {
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();

//===========================================Basic loop============================================//

// FOR LOOP

for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is my favorite number');
    continue;
  }

  if(i === 5){
    console.log('Stop the loop');
    break;
  }

  console.log('Number '+ i);
}

// WHILE LOOP

let i = 0;

while(i < 10){
  console.log('Number ' + i);
  i++;
}

// DO WHILE

let i = 100;

do {
  console.log('Number ' + i);
  i++;
}

while(i < 10);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

 for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

// FOREACH
cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
});

// MAP
const users  = [
  {id: 1, name:'John'},
  {id: 2, name: 'Sara'},
  {id: 3, name: 'Karen'},
  {id: 4, name: 'Steve'}
];

 const ids = users.map(function(user){
  return user.id;
 });

console.log(ids);


// FOR IN LOOP
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for (let x in user) {
    console.log(`${x} : ${user[x]}`);
}

//======================================window object====================================================//

// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
alert('Hello World');

Prompt
const input = prompt();
alert(input);

Confirm
if(confirm('Are you sure')){
  console.log('YES');
} else {
  console.log('NO');
}

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
window.location.href = 'http://google.com';
//Reload
window.location.reload();

// History Object

window.history.go(-2);
 val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;



console.log(val);
