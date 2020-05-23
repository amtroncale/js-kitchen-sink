console.log('JS Kitchen Sink');
console.log('---------------');

//store my name as a string
var myName = 'Adam';

//store the number of states
const numOfStates = 50;

//store the sum of 5 + 4
let sum = 5 + 4;

//creates sayHello function to console.log a value
function sayHello() {
    alert('Hello World!')
}

sayHello();

console.log('---------------');

//creates checkAge
function checkAge(name, age) {
    if (age < 21) {
      alert("Sorry " + name + ", you aren't old enough to view this page!");  
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

console.log('---------------');

//create an array of your favorite vegetables and name it accordingly.
const vegetables = ["tomatoes", "onions", "spinach", "cucumbers", 'squash'];

for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables)
}

console.log('---------------');
//create an object named pet with two properties, name and breed. Use your own pets name and breed as the values
const pet = {
    name: "Maverick", 
    age: 6
};

console.log(pet);

console.log('---------------');
// Create an array of 5 objects that contain name and age properties. Make up names and ages for each object, making sure some are younger than 21 and some are 21+
const people = [
    {
        name: "Adam",
        age: 37
    },
    {
        name: "Jessica",
        age: 34
    },
    {
        name: "Maverick",
        age: 6
    },
    {
        name: "Luke",
        age: 33
    },
    {
        name: "Frank",
        age: 49
    },
];

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

console.log('---------------');
//create a function called getLength that takes any word as an argument. The function should return the number of characters in the string.
function getLength(word) {
    return word.length;
}

let someResult = getLength('Hello World');
if (someResult % 2 === 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}