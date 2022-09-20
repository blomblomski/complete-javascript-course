'use strict';

// let hasDriversLicense = false;
// const passedTest = true;

// if (passedTest) {
//     hasDriversLicense = true;
// }
// if (hasDriversLicense) {
//     console.log('I can drive!')
// }

// function logger() {
//     console.log('Logging boi!')
// }

// logger();


// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice
// }

// console.log(fruitProcessor(5, 0));

function calcAge1(birthYear) {
    return new Date().getFullYear() - birthYear;
}

console.log(calcAge1(35));

// Function expression
const calcAge2 = function (birthYear) {
    return new Date().getFullYear() - birthYear;
};

console.log(calcAge2(20));

// arrow function
const calAge3 = birthYear => new Date().getFullYear() - birthYear;

console.log(calAge3(1986))


const yearsUntilRetirement = (birthYear) => {
    const age = new Date().getFullYear() - birthYear;
    const retirement = 68 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1986));