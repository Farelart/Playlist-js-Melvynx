console.log("Hello World");

// Variables

let myName = "Farel";
console.log("Name", myName);
myName = "Widad";
console.log("Name", myName);

const myOrigin = "Beninois";
console.log("Origin", myOrigin);

// Les types de données
/*
    string
    boolean
    number
    null
    undefined
    symbol
    bigint
*/

//1.myString
const myString = "doublequote";
const myString2 = `back-tick`;
console.log(myString, myString2);

const sentence = `Strings can be defined either with ${myString} or ${myString2}`
console.log("The sentence is: ",sentence, "And the length is:", sentence.length);

const firstChar = sentence[0];
console.log(firstChar);

const myNameNumber = Number(myName);
console.log(Number.isNaN(myNameNumber));

// Regular functions
function add(a,b) {
    return a + b;
}
// Arrow functions
const add2 = (a,b) => {
    return a + b;
}

console.log(add(2,3));
console.log(add2(3,4));

// Objets
const user = {
    name: "Farel",
    age: 23
}

console.log(user);
user.name = "Jean";
console.log(user);


// primitive variables are assigned values while arrays and objects are assigned addresses(they are reference type)