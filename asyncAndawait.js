//Async and Await

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise successfull");
  }, 10000);
});

//Async fuction always returns a promise
//if a non-promise-data is return - then it wrap it inside a promise and return
// async function getData() {
//   return p;
// }
// const data = getData();
// console.log(data);


//await must be used inside a async function otherwise it return a uncaught syntax error
//await returs value not a promise
async function getData() {
  const val = await p;
  console.log(val);
}
getData();
