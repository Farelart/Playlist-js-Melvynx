// The practice link https://coursework.vschool.io/array-filter-exercises/

// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater

function fiveAndGreaterOnly(arr) {
    const result = arr.filter((number) => number > 5);
    return result;
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

// 2) Given an array of numbers, return a new array that only includes the even numbers

function evensOnly(arr) {
    const result = arr.filter((number) => number % 2 === 0);
    return result;
}

console.log(evensOnly([3, 6, 8, 2]));

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

function fiveCharactersOrFewerOnly(arr) {
    const result = arr.filter((str) => str.length <= 5);
    return result;
}

console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club

function peopleWhoBelongToTheIlluminati(arr){
    const result = arr.filter((obj) => obj.member === true);
    return result;
}
  
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));

// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

function ofAge(arr){
    const result = arr.filter((obj) => obj.age > 18);
    return result;
}
  
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); 