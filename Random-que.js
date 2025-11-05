// function show(marks) {
//   const message = marks || "absent"; // correct way -> ?? "absent";
//   console.log(`marks ${message}`);
// }

// show(12);
// show(33);
// show(0); // in js 0 is falsy value so this will return "absent"

// // implicit type coercion (it means js automatically converts one operand type to another when the operands are of diff type)

// let a = 12; // js converts this 12 num -> str
// let b = "twelve";
// console.log(a + b); // output : 12twelve

// let c = 12;
// let d = "12"; //js converts this str -> num
// console.log(c - d); // outputs : 0

// let e = 12;
// let f = "12";
// console.log(e * f);

// // Boolean coercion

// // Boolean coercion on if statement
// var x = false;
// var y = true;

// if (x) {
//   console.log(x);
// }
// // The code inside this block will not run since the value of x is 0(Falsy)

// if (y) {
//   console.log(y);
// } // The code inside this block will run since the value of y is 23 (Truthy)

// // js is dyanamically typed lang because variable is checked during run-time meaning the
// // interpreter determines the type based on the value it holds at that moment
// // in statically typed language, where the type of a variable is checked during compile-time.

// var name;

// name = 34; // 1 st initialization of value
// name = "prajwal"; // 2nd initialization of value curr this is assingned to name variable
// console.log(name);

// let a1;
// a1 = 12;
// a1 = "prajwal";
// console.log(a1);

// let a;
// a = 12;
// console.log(a);

// const x = 12;
// x = 12;
// console.log("hello there");

// basic example of use of template literal

// let a = 12;
// let b = 58.46;
// let str = `i am in ${a} standard and i got ${b} % in it `;
// console.log(str)

// let arr = ["W", "B", "C", "D", "K", "A" , "E", "T"];
// console.log(arr.length)
// console.log(arr.indexOf("E", -3));
// if element is not in the array it will return -1
// indexOf() is a method of array used to return elements index(position)
// indexOf(put search element here , if put + integer fromthisindex till first occurance of searching element // and if put - Negative index counts back from the end of the array );

// // const arr = [2, 100, 3, 150];
// arr.sort((a, b) =>  a - b); // for ascending b - a for descending
// console.log(arr);

// let arr2 = ["W", "B", "C", "D", "K", "A", "E", "T"];
// arr2.sort((a, b) =>  a.localeCompare(b)); // ascending for str
// console.log(arr2);

// let abc = 2;
// let a = !--abc; // NOT -1 abc(2) = 1 !1-> false abc -> (1) // 1 is truthy
// let b = !--abc; // NOT -1 -> abc(1) = 0; !0 -> true // 0 is falsy
// console.log(a, b);

//  comma making diff in execution

// function sum() {
//   console.log("Prajwal 1");
//   return 2 + 2;
// }

// function square() {
//   console.log("prajwal 2");
//   return 4 * 4;
// }
// let abc = (sum(), square());
// console.log(abc);

// OUTPUT : prajwal 1
//        : prajwal 2
//        : 16

//You are using the comma operator ( , ).

// The comma operator in JavaScript:
// Evaluates all expressions from left to right
// But returns only the value of the last expression
// So even though both functions are executed,
// only the last one’s return value is kept.

/* WAP code where two strings will merge alternatively in
 js like if string 1 is pawl and second is rja then is should
  return prajwal  */

function str(str1, str2) {
  let result = "";
  let maxlen = Math.max(str1.length, str2.length);

  for (let i = 0; i < maxlen; i++) {
    if (i < str1.length) result += str1[i];
    if (i < str2.length) result += str2[i];
  }

  return result;
}
console.log(str("pawl", "rja"));


// reduce method 

let a = [1, 2, 3, 4, 5];
let b = a.reduce((acc, curr) => {
  return acc + curr;
});
console.log(b);
