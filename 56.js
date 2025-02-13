const fs = require('fs');
const path = require('path');

try {
  const filePath = path.join(__dirname, 'dele.txt');
  const data = fs.readFileSync(filePath, 'utf-8');
  console.log("File content:", data);

  const newText = data.replace("browser", "Rohan");
  const newFilePath = path.join(__dirname, 'rohan.txt');
  fs.writeFileSync(newFilePath, newText);
  console.log("File 'rohan.txt' created.");
} catch (err) {
  console.error("Error:", err);
  if (err.code === 'ENOENT') {
    console.error("File not found! Check the path.");
  }
}