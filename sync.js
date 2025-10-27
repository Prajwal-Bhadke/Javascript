// synchronous execution

console.log("one");
console.log("two");
console.log("three");

// async execcution

console.log("one");
console.log("two");

setTimeout(() => {      // this will not affect the below execution
  console.log("hello");
}, 2000);

console.log("three");
console.log("four");

// callback function

function sum(a, b) { // sum as a fun^
  console.log(a + b);
}

function calculate(a, b, sum) {  // here sum a fun^ is passed as arg to fun^ calculate
  sum(a, b);
}

calculate(1, 2, sum);    // passing a, b, and sum arg

// callback hell

function getdata(dataid, getnextdata) {
  setTimeout(() => {
    console.log("data :", dataid);
    if (getnextdata) {
      getnextdata();
    }
  }, 3000);
}

// this is callback hell
getdata(1, () => {
  console.log("getting data 2.....");
  getdata(2, () => {
    console.log("getting data 3.....");
    getdata(3, () => {
      console.log("getting data 4...");
      getdata(4);
    });
  });
});

promise

function getdata(dataid, getnextdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data :", dataid);
      resolve("succes");
      if (getnextdata) {
        getnextdata();
      }
    }, 7000);
  });
}

promise

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("this is promise");
    // resolve("success");
    reject("error");
  });
};

let promise = getPromise();
promise.then((res) => {
  // used after promise fulfiled
  console.log("promise successfull", res);
});

promise.catch((err) => {
  // used after promise fulfiled
  console.log("promise rejected :", err);
});

// promise chainning

function async1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 4000);
  });
}

function async2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 4000);
  });
}

console.log("fetching data 1 ...");
async1().then((res) => {
  console.log("fetching data 2 ...");
async2().then((res) => {});
});

// real example of how async is better than promise chain and callback hell

function getdata(dataid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data :", dataid);
      resolve("success");
    }, 3000);
  });
}

// this is callback hell

getdata(1, () => {
  console.log("getting data 2.....");
  getdata(2, () => {
    console.log("getting data 3.....");
    getdata(3, () => {
      console.log("getting data 4...");
      getdata(4);
    });
  });
});

// instead of using above callback we can use below promise chain

getdata(1).then((res) => {
  console.log(res);
  getdata(2).then((res) => {
    console.log(res);
  });
});

// use of async 

async function getall() {
  await getdata(1);
  await getdata(2);
  await getdata(3);
}



// async - await basic example

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("wather data");
      resolve(200);
    }, 4000);
  });
}

async function get() {
  await api();
}
