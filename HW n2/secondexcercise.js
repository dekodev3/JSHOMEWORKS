//SECOND ASSIGMENT

var birthYear = prompt("Enter your year of birth");
var parsedYear = parseInt(birthYear);
var zodiacCalc = (parsedYear -4) %12;
console.log(zodiacCalc);

if(zodiacCalc == 0){
    console.log("You are RAT!");
}
else if(zodiacCalc == 1){
    console.log("You are OX!");
}
else if(zodiacCalc === 2){
    console.log("You are TIGER!");
}
else if(zodiacCalc == 3){
    console.log("You are RABBIT!");
}
else if(zodiacCalc == 4){
    console.log("You are DRAGON!");
}
else if(zodiacCalc == 5){
    console.log("You are SNAKE!");
}
else if(zodiacCalc == 6){
    console.log("You are HORSE!");
}
else if(zodiacCalc == 7){
    console.log("You are GOAT!");
}
else if(zodiacCalc == 8){
    console.log("You are MONKEY!");
}
else if(zodiacCalc == 9){
    console.log("You are ROOSTER!");
}
else if(zodiacCalc == 10){
    console.log("You are DOG!");
}
else if(zodiacCalc == 11){
    console.log("You are PIG!");
}
else{
    console.log("You are not supported in chinese zodiac!");
}