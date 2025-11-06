// string at() meths
/**The at() method of String values takes an integer value and returns a
 * new String consisting of the single UTF-16 code unit located at the specified position.
 * supports positive and negative integers. Negative integers count back from
 * the last string character. */

// let name = "yash";
// console.log(name.at([-1]))

// charAt() meth
/* Returns the character at the specified index (starting from 0).
and not allow negative integers 
*/

// let Name = "yashad";
// console.log(Name.charAt([]))

//concat(); meth
/**The concat() method of String values concatenates the string arguments to this string and returns a new string. */

// const str1 = "Hello";
// const str2 = "World";

// console.log(str1.concat(" ", str2));
// // Expected output: "Hello World"

// console.log(str2.concat(", ", str1));
// // Expected output: "World, Hello"

// trim() to remove extra space from start and end of string

// const exspace = " prajwal bhadke from amravati  ";
// console.log(exspace.toLowerCase());

// The slice() method of String values extracts a section of this
// string and returns it as a new string, without modifying the original string.
// slice(indexStart);
// slice(indexStart, indexEnd);
// indexEnd is non-inclusive

// const str = "Prajwal is a CS graduate and have a masters degree";

// console.log(str.slice(1,4))
// console.log(str.slice(29));
// console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

// console.log(str.slice(-4));
// Expected output: "dog."

// console.log(str.slice(-9, -5));
// Expected output: "lazy"

// JavaScript program to find the longest word (maximum length word) in a given string.

// function longestword(str) {
//   let words = str.split(" ");
//   let longword = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longword.length) {
//       longword = words[i];
//     }
//   }
//   return longword;
// }

// console.log(longestword("I love programming in JavaScript"));



