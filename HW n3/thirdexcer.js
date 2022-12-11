//Third Excer 


function dogAge(humanYears) {
    let calcAge = humanYears * 7;
    console.log(calcAge);
    return calcAge;
}

//dog to human years

function humanAge(dogYears) {
    let calcAge = dogYears / 7;
    console.log(calcAge);
    return calcAge;
}

// calculation stored in variable

let ageofDog = dogAge(10);
let ageOfHuman = humanAge(70);
console.log("=========Result from variable=======")
console.log(ageofDog);
console.log(ageOfHuman);


