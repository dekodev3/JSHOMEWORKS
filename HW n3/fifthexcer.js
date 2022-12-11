//Fifth Excercise AGE CALCULATOR


let birthYear = Number(prompt("Enter birth year"));
let CurrentYear = new Date().getFullYear()

function calculateAge(CurrentYear, birthYear){
    let age = CurrentYear - birthYear;
    let resultMess = `You are ${age} years old`;
    console.log(resultMess);
    return resultMess;

}
calculateAge(CurrentYear, birthYear);

