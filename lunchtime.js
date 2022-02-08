const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("What is your name?", function(input){
    console.log("Hi " + input);
})

reader.question("What is your quest?", function(input){
    console.log(input + " eh? ");
})
reader.question("What is the capital of Assyria?", function(input){
    console.log(input + "? NO. Goodbye");
})
