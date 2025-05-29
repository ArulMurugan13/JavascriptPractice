const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("P1 Success");
    reject("P1 Fail");
  }, 2000);
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("P2 Success");
    reject("P2 Fail");
  }, 1000);
});
const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("P3 Success");
    reject("P3 Fail");
  }, 3000);
});

Promise.any([p1, p2, p3])
  .then(function (res) {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
