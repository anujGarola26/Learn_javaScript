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

// Problem 2: Convert Node-Style Callback Functions to Promises (promisifyBasic)

function promisifyBasic(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn.call(this, ...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

// Example usage:

function legacyGetProfile(userId, callback) {
  setTimeout(() => {
    if (userId <= 0) callback(new Error("Invalid user ID"));
    else callback(null, { id: userId, name: "Sneha" });
  }, 50);
}

const getProfileAsync = promisifyBasic(legacyGetProfile);

getProfileAsync(10).then(console.log).catch(console.error);
