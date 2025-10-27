// accesing and appending new line to html element

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from apna college";

// let divs = document.querySelectorAll(".box");
// console.dir(div);
// div.innerText = ""

// .getAttribute("Attribute")

// let a = document.querySelector("div");

// let id = a.getAttribute("id");
// console.log(id);

// .setAttribute("Attribute" , "value")

// let para = document.querySelector("p");

// console.log(para.setAttribute("id" , "newDiv"));


// how to create and add new element using DOM

// .append();

// adds new el inside and at last of node

// let newbtn = document.createElement("button"); //created
// newbtn.innerText = "Click Me"; // text added to button element
// let div = document.querySelector("div"); //access to div
// div.append(newbtn); // added new el to div at last

// .prepend();
// adds new el inside and at Start of node

// let newbtn = document.createElement("button"); //created
// newbtn.innerText = "Click Me"; // text added to button element
// let div = document.querySelector("div"); //access to div
// div.prepend(newbtn); // added new el to div at start

// .before();

//  adds new el outside and at before the node

// let newbtn = document.createElement("button"); //created
// newbtn.innerText = "Click Me"; // text added to button element
// let div = document.querySelector("div"); //access to div
// div.before(newbtn); // added new el to div at start

// .after();

//  adds new el outside and after the node

// let newbtn = document.createElement("button"); //created
// newbtn.innerText = "Click Me"; // text added to button element
// let div = document.querySelector("div"); //access to div
// div.after(newbtn); // added new el to div at start

// Practice QUE

// 1

// let Newbutton = document.createElement("button");
// Newbutton.innerText = "CLICK ME";
// Newbutton.style.backgroundColor = "red" ;
// Newbutton.style.color = "white";
// let body = document.querySelector("body");
// body.prepend(Newbutton);

// 2

// let newclass = document.createElement("class");
// newclass.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. ";
// newclass.style.color = "blue";
// let body = document.querySelector("body");
// body.append(newclass)
