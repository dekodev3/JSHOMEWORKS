//Sixt Excercise BONUS oF BONUS
function dogAge(humanYears) {
    let calcAge = humanYears * 7;
    return calcAge;
}

//dog to human years

function humanAge(dogYears) {
    let calcAge = dogYears / 7;
    return calcAge;
}

let userChoice = prompt("Enter 'D' for dog years, and 'H' for human years");
let userInput = parseInt(prompt("Enter the years"));
if(userChoice === "D"){
    console.log(`dog years ${dogAge(userInput)} dog years`);
}
else if(userChoice === "H"){
    console.log(`Your dog has ${humanAge(userInput)} human years`)
}
else{
    console.log('Wrong calculation');
}
