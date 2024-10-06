// The practice links https://coursework.vschool.io/array-reduce-exercises/


// 1) Turn an array of numbers into a total of all the numbers

function total(arr) {
    const tot = arr.reduce((acc, curr) => acc + curr);
    return tot;
}

console.log(total([1,2,3]));

// 2) Turn an array of numbers into a long string of all those numbers

function stringConcat(arr) {
    const sc = arr.reduce((acc, curr) => acc.toString() + curr.toString());
    return sc;
}

console.log(stringConcat([1,2,4]));

// 3) Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
    const count = arr.reduce((acc, curr) => {
        curr.voted ? acc++ : acc;
        return acc;
    }, 0);
    return count;
}

let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(totalVotes(voters));

/* function totalVotes(arr) {
    return arr.reduce((count, voter) => voter.voted ? count + 1 : count, 0);
}

var voters = [
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(totalVotes(voters)); // Output: 7 */

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

function shoppingSpree(arr) {
    const totalPrice = arr.reduce((acc, curr) => acc + curr.price, 0);
    return totalPrice;
}

let wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

// 5) Given an array of arrays, flatten them into a single array

function flatten(arr) {
    const flatArr = arr.reduce((acc, curr) => acc.concat(curr), []);
    return flatArr;
}

let arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// 6) Given an array of potential voters, return an object representing the results of the vote

function voterResults(arr) {
    const results = arr.reduce((acc, curr) => {
        if(curr.age >= 18 && curr.age <= 25) {
            acc.numYoungPeople += 1;
            if(curr.voted) {
                acc.numYoungVotes += 1;
            }
        } else if(curr.age >= 26 && curr.age <= 35) {
            acc.numMidsPeople += 1;
            if(curr.voted) {
                acc.numMidVotesPeople += 1;
            }
        } else if(curr.age >= 36 && curr.age <= 55) {
            acc.numOldsPeople += 1;
            if(curr.voted) {
                acc.numOldVotesPeople += 1;
            }
        }

        return acc;
    }, {
        numYoungPeople: 0,
        numYoungVotes: 0,
        numMidsPeople: 0,
        numMidVotesPeople: 0,
        numOldsPeople: 0,
        numOldVotesPeople: 0,
    });

    return results;
}

var voters2 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(voterResults(voters2)); 