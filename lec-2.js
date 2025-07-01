// 29/06/2025

const sym1 = Symbol("prajwal");
const sym2 = Symbol("prajwal");
console.log(Symbol("prajwal") == Symbol("prajwal")); // false

//Logical Operator

//*******AND-&&********

let a = 14;
let b = 13;
let cond1 = a >= b;
let cond2 = b >= a;
console.log("cond1 && cond2 = ", cond1 && cond2);

//If statement

let age = 18;

if ((age) => 18) {
  console.log("Your eligible for voting");
}

let mode = "light";

let color;
if (mode === "dark") {
  color = "black";
}
if (mode === "light") {
  color = "white";
}
console.log(color);

// IF-else

let Mode = "light";

let Color;

if (Mode === "dark") {
  Color = "black";
} else {
  Color = "white";
}

console.log(color);

// Odd - Even

let x = 13;

if (x % 2 === 0) {
  console.log(`number ${a} is Even:`);
} else {
  console.log(`number ${a} is Odd:`);
}

//else If
let y = 12;
if (y > 10) {
  console.log("true");
}

let A = 12;
let result = A > 10 ? "yes" : "no";
console.log(result);


