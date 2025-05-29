const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("P1 promise resolved");
  }, 10000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("P2 promise resolved");
  }, 20000);
});

async function handlePromise() {
  console.log("Hello World!!!");

  //js engine appears to wait here
  //handlepromise suspends when it sees await and after resolved then only it continues to execute where it lefts
  const val1 = await p1;
  console.log("Learning Async Await promise 1");
  console.log(val1);

  console.log("Hello World!!!!!!!!!!!!!!!!!!!!!!");
  const val2 = await p2;
  console.log("Learning Async Await promise 2");
  console.log(val2);
}

function handlePrinting() {
  console.log("Printing 1");
  console.log("Printing 2");
  console.log("Printing 3");
}
handlePromise();
handlePrinting();

//like hoisting when function called all the  promise starts to resolve
// diff between async await and promise are only syntax sugar - in behind js treat
// both is same way as promise.
// Async await is  easy to understand than promise chaining


