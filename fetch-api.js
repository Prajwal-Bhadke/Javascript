const URL = "https://jsonplaceholder.typicode.com/users";
const para = document.querySelector("#para");
const btn = document.querySelector("#btn");
const get = async () => {
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  para.innerText = `Name: ${data[0].name}\nEmail: ${data[0].email}\nPhone: ${data[0].phone}`;

};

btn.addEventListener("click", get);
