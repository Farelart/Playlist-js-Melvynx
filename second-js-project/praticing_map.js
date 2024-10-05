// 1.Double the numbers

const numbers = [1,2,3,4,5];

function doublingArrayNumbers (arr) {
    const duplicatedArr = [...arr];
    const doubleNumbers = duplicatedArr.map((n) => n * 2);
    return doubleNumbers;
}

console.log(`The doubled array of ${numbers} is ${doublingArrayNumbers(numbers)}`);

// 2.Uppercase Strings

const stringArr = ["a","b","c","banana"];

function uppercaseStrings (arr) {
    const duplicatedArr = [...arr];
    const uppercaseString = duplicatedArr.map((s) => s.toUpperCase());
    return uppercaseString;
}

console.log(`The upper case strings of ${stringArr} is ${uppercaseStrings(stringArr)}`);

// 3. Extract Object Properties

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 }
];

function extractProperty (arr) {
    const duplicatedArr = [...arr];
    const extractedName = duplicatedArr.map((user) => user.name);
    return extractedName;
}

console.log(`The name of these users ${JSON.stringify(users)} are ${extractProperty(users)}`);

// 4. Calculating square roots

const originalNumbers = [4, 9, 16, 25];

function sqrtArray(arr) {
    const duplicatedArr = [...arr];
    const sqrtArr = duplicatedArr.map((number) => Math.sqrt(number));
    return sqrtArr;
}

console.log(`The squared root array of ${originalNumbers} is ${sqrtArray(originalNumbers)}`);

// 5. Customize mapping function

const temperaturesInCelsius = [25, 30, 15, 20];

function toFahrenheit(tempArr) {
    const duplicatedArr = [...tempArr];
    const fahren = duplicatedArr.map((temp) => ((temp * 9/5) + 32));
    return fahren;
}

console.log(`${temperaturesInCelsius}°C is equal to ${toFahrenheit(temperaturesInCelsius)}°F`);

//  6. Square even numbers

const originalNumbers2 = [1, 2, 3, 4, 5];

function squareEvenNumbers (arr) {
    const duplicatedArr = [...arr];
    const evenNumbers = duplicatedArr.map((number) => {
        return (number % 2 === 0) ?  Math.pow(number, 2) :  null
    })
    return evenNumbers.filter(num => num !== null);
}

console.log(`The squared even numbers of ${originalNumbers2} are ${squareEvenNumbers(originalNumbers2)}`);

// 7. Calculate area of rectangles

const rectangles = [
    { width: 3, height: 5 },
    { width: 4, height: 8 },
    { width: 2, height: 6 }
];

function areaRectangle(arr) {
    const duplicatedArr = [...arr];
    const area = duplicatedArr.map((rect) => (rect.width * rect.height));
    return area;
}

console.log(`The areas of each ${JSON.stringify(rectangles)} are ${areaRectangle(rectangles)}`);

// 8. Extract Initials from Names

const names = ['John Doe', 'Alice Smith', 'Bob Johnson'];

function initialOfNames(arr) {
    const duplicatedArr = [...arr];
    const initials = duplicatedArr.map((name) => {
        const [firstName, lastName] = name.split(' '); // destructuring
        return `${firstName.charAt(0)}${lastName.charAt(0)}`;
    });
    return initials;
}

console.log(`Initials of ${names} are ${initialOfNames(names)}`);

// 9. Format Dates

// 10. Create HTML List

const items = ['Apple', 'Banana', 'Cherry', 'Date'];

function htmlList(arr) {
    const duplicatedArr = [...arr];
    /* const lists = duplicatedArr.map((stuff) => {
        const list = `<li>${stuff}</li>`;
        return list
    }); */
    const lists =  `<ul>${duplicatedArr.map((item) =>
        `<li>${item}</li>`).join('')}</ul>`;
    return lists;
}

console.log(`${htmlList(items)}`);
