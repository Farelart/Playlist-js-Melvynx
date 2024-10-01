const user = {
    name: "Farel",
    age: 23,
    height: 170
}
console.log(user);
console.log(user.name);

const numbers = [1,2,3,4,5,6];
console.log(numbers);
console.log(numbers[0]);

// spread operator
const numbers2 = [...numbers];
numbers2.push(7,8);
console.log(numbers2);
numbers2.pop();
console.log(numbers);
console.log(numbers2);

// destructuring pattern
let [firstNumber, secondNumer, thirdNumber, ...otherNumbers] = numbers;
console.log(firstNumber, secondNumer, thirdNumber, otherNumbers);
console.log(numbers[firstNumber]);

// imperative programming
const users = [
    {
        id: 1,
        name: "Farel"
    },
    {
        id: 2,
        name: "Widad"
    }
];

const numArray = [1, 2, 7, 6, 234, 8, 0, 5, -1];
const maxNum = (arr) => {
    let maxNumber = arr[0];
    for(const item of arr) {
        if(item > maxNumber) {
            maxNumber = item;
        }
    }
    return maxNumber;
}
console.log(`The maximum number for this array ${numArray} is ${maxNum(numArray)}`);

const multiplyByTwo = (arr) => {
    const duplicatedArr = [...numArray];
    for(let i = 0; i < duplicatedArr.length; i++) {
        duplicatedArr[i] *= 2;
    }
    return duplicatedArr;
}
console.log(`The doubled array of ${numArray} is ${multiplyByTwo(numArray)}`);

// declarative programming

const multiplicateByTwo = numArray.map((n) => n * 2);
console.log(numArray, multiplicateByTwo);