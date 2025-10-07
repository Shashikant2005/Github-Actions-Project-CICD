const greet = require("./index");

function testGreet() {
  const output = greet("World");
  if (output === "Hello, World!") {
    console.log("✅ Test cases passed");
    process.exit(0);
  } else {
    console.error("❌ Test cases failed");
    process.exit(1);
  }
}

testGreet();
