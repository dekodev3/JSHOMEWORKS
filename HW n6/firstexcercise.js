//First Excercise
let userInput = parseInt(prompt("Please enter your weight"));
let resultCalc = document.getElementById("result");


function weightInChickens(userInput){
let calc = userInput / 0.5;
console.log(calc);
resultCalc.innerText = `You weight ${calc} chickens`;
}

weightInChickens(userInput);



