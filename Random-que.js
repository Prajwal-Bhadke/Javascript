// // function show(marks) {
// //   const message = marks || "absent"; // correct way -> ?? "absent";
// //   console.log(`marks ${message}`);
// // }

// // show(12);
// // show(33);
// // show(0); // in js 0 is falsy value so this will return "absent"

// // implicit type coercion (it means js automatically converts one operand type to another when the operands are of diff type)

// let a = 12;  // js converts this 12 num -> str
// let b = "twelve";
// console.log(a + b); // output : 12twelve

// let c = 12;
// let d = "12"; //js converts this str -> num
// console.log(c - d); // outputs : 0

// let e = 12;
// let f = "12";
// console.log(e * f);

// let a = 0;

// console.log(typeof a);

// Boolean coercion

// Boolean coercion on if statement
// var x = false;
// var y = true;

// if (x) {
//   console.log(x);
// }
// // The code inside this block will not run since the value of x is 0(Falsy)

// if (y) {
//   console.log(y);
// } // The code inside this block will run since the value of y is 23 (Truthy)

// js is dyanamically typed lang because variable is checked during run-time meaning the
// interpreter determines the type based on the value it holds at that moment
// in statically typed language, where the type of a variable is checked during compile-time.

// var name;

// name = 34; // 1 st initialization of value
// name = "prajwal"; // 2nd initialization of value curr this is assingned to name variable
// console.log(name);

// let a;
// a = 12;
// a = "prajwal";
// console.log(a);


