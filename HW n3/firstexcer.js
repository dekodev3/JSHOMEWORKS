// first excer Chinese zodiac

let birthYear = prompt("Enter your year of birth");
let parsedYear = parseInt(birthYear);
var zodiacCalc = (parsedYear - 4) % 12;
console.log(zodiacCalc);


switch (zodiacCalc) {
    case 0:
        console.log("You are RAT!")
        break;
    case 1:
        console.log("You are OX!")
        break;
    case 2:
        console.log("You are TIGER!")
        break;
    case 3:
        console.log("You are RABBIT!")
        break;
    case 4:
        console.log("You are DRAGON!")
        break;
    case 5:
        console.log("You are SNAKE!")
        break;
    case 6:
        console.log("You are HORSE!")
        break;
    case 7:
        console.log("You are GOAT!")
        break;
    case 8:
        console.log("You are MONKEY!")
        break;
    case 9:
        console.log("You are ROOSTER!")
        break;
    case 10:
        console.log("You are DOG!")
        break;
    case 11:
        console.log("You are PIG!")
        break;
    default:
        console.log("No match found!")
        break;
}