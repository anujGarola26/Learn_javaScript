// Problem 1: Strict Type Detection Engine ('safeTypeOf')

function safeTypeOf(var1, var2) {
  if (var1 == var2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

safeTypeOf(2, "2");