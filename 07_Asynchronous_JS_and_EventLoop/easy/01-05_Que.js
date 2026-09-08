// Problem 1: Implement sleep(ms) / delay(ms) Using Native Promises

function sleep(ms) {
  var delayTime = 0;

  if (typeof ms === "number" && ms > 0) {
    delayTime = ms;
  } else {
    console.log("Not valid ms");
  }

  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("done");
      resolve();
    }, delayTime);
  });
}

sleep(5800);
sleep(0);
sleep(3000);
sleep("resumed");
sleep(10000);
