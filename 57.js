const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'dele.txt'); // Construct the correct path

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return; // Important to prevent further execution
  }
  console.log(data);
});

console.log("This is a message");