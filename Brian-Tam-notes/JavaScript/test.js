console.log("hello world"); // Prints "hello world" to the console

var n = 5; // Sets "n" to 5
console.log(n); // outputs "n"

let x = 10; // let declares block-scoped variables. It is only accessible in the block of code that it is declared. It also does not allow redeclarations
console.log(x);


if(true){
    let y = 20;
    console.log(y); // outputs 20 to the console
}

// console.log(y); // Error, y was declared with "let" and can only be accessed in the if statement

// Loops

for(let i = 0; i < 3; ++i){
    console.log(i);
}

var i = 4;
while(i > 0){
    console.log(i);
    --i;
}
i = 4;
// do while loop
do{ // executes below code once before entering while loop
    console.log(i);
    --i;
}while(i > 0);

// for in - iterates through objects
const myCars = {make : "Toyota", model: "Camry", year: "2024"};

for(let key in myCars){
    console.log(`${key}: ${myCars[key]}`);
}
