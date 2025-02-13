console.log("This is tutorial 45");

function greet(name, greetText="Greetings from JavaScript")
{
    let name1 = "Name1"; //Local variable
    console.log(greetText + " " + name);
    console.log(name + " is a good girl");
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
    // This will not print because after return that part of the code ends & nothing works or prints after that even in a function
    // console.log("Function is returned")
}

// Here name is global variable
let name = "Sanjana";
let name1 = "Priti";
let name2 = "Stella";
let name3 = "Jessy";
let greetText = "Good Morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
// let returnVal = greet(name3);
// console.log(returnVal)

let returnVal = sum(1,2,3);
console.log(returnVal)
// Using Functions instead of this repeatedly copying and pasting the same thing again & again
// console.log(name + " is a good girl");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good girl");
// console.log(name3 + " is a good girl");