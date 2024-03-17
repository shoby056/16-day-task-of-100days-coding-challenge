// Question 47:** Advanced Array Destructuring:
//  Given an array of objects representing different laptops, 
// each with properties `make`, `model`, and `year`, 
// use array destructuring to assign
//  the first and second laptops to variables.
//  Then, log these variables.


let price1=[1200,800,1300,6999]
let price2=[400,300,600,650]
//combine prices and in ascending orders
const combinedLaptops = [...price1, ...price2].sort((a, b) => a - b);
//loggin combinelaptops

console.log(combinedLaptops)