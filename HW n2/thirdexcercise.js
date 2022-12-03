//BONUS EXCERCISE
var num1 = parseInt(prompt("Enter number"));
var num2 = parseInt(prompt("Enter number"));
var num3 = parseInt(prompt("Enter number"));
var num4 = parseInt(prompt("Enter number"));
var num5 = parseInt(prompt("Enter number"));

if(num1>num2 && num1>num3 && num1>num4 && num1>num5){
    alert(num1);
    console.log("====THE MAXIMUM NUMBER IS:====");
    console.log(num1);
}
else if(num2>num1 && num2>num3 && num2>num4 && num2>num5){
    alert(num2);
    console.log("====THE MAXIMUM NUMBER IS:====");
    console.log(num2);
}
else if(num3>num1 && num3>num2 && num3>num4 && num3>num5){
    alert(num3);
    console.log("====THE MAXIMUM NUMBER IS:====");
    console.log(num3);
}
else if(num4>num1 && num4>num2 && num4>num3 && num4>num5){
    alert(num4);
    console.log("====THE MAXIMUM NUMBER IS:====");
    console.log(num4);
}
else if(num5>num1 && num5>num2 && num5>num3 && num5>num4){
    alert(num5);
    console.log("====THE MAXIMUM NUMBER IS:====");
    console.log(num5);
}
else{
    alert("You have entered two or more same numbers. Try again")
    console.log("You have entered two or more same numbers. Try again");
}