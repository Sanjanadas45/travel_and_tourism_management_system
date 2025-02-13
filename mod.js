console.log("This is module");

function average(arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return sum / arr.length;
}

// module.exports = average; // Export the function directly

// module.exports = {
//     avg: average,
//     name: "Sanjana",
//     repo: "GitHub"
// }

module.exports.name = "Sanjana"