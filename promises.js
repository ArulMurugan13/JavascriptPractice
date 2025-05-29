const cart = ["shirt", "pants", "shoes"];

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      return resolve("12345");
    }, 10000);
  });

  return pr;
}

const promise = createOrder(cart);
console.log(promise);

promise.then(function (orderId) {
  console.log(orderId + "- order is ready");
});
