// string at() meths

// let str = "yash";
// console.log(str.at([2]))

// let str1 = "yashad";
// let s3 = Math.max(str1.length);
// console.log(s3);
// // console.log(str.charAt([2]))



// JavaScript program to find the longest word (maximum length word) in a given string.

function longestword(str) {
    let words = str.split(" ");
    let longword= "";
    for (let i = 0; i <words.length; i++){
        if (words[i].length > longword.length){
            longword = words[i];
        }
    }
    return longword;
}


console.log(longestword("I love programming in JavaScript"));