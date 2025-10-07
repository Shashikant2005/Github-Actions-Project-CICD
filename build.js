const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "build");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.writeFileSync(
  path.join(outputDir, "output.txt"),
  `Build completed successfully at ${new Date().toLocaleString()}`
);

console.log("📦 Build completed — file created in /build folder!");
