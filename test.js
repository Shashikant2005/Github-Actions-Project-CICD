const greet = require("./index");

function testGreet() {
  const output = greet("World");
  if (output === "Hello, World!") {
    console.log("✅ Test passed");
    process.exit(0);
  } else {
    console.error("❌ Test failed");
    process.exit(1);
  }
}

testGreet();
