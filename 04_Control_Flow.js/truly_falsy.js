// falsy values

// false, 0, -0,BigInt 0n, "", null, undefined, NaN

// others are truthy values
//truthy vals also include 

// "0" ,"false"," ",[],{}, function(){} --> here these is a string


// Nullish Coalescing Operator

// The Nullish Coalescing Operator (??) in JavaScript is a logical operator that returns the right-hand side value only if the left-hand side is null or undefined.

let name = null;
let defaultName = "Guest";

let finalName = name ?? defaultName;
console.log(finalName); // "Guest"


// Terniary Operator

// The Ternary Operator (also called the conditional operator) is a shorthand for if-else statements in JavaScript (and many other languages). It's great for quick, simple decisions.

// let age = 20;
// let result = age >= 18 ? "Adult" : "Minor";

// console.log(result); // "Adult"

