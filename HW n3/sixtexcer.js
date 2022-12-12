//Sixt Excercise BONUS oF BONUS



function calcAges(humanAge, dogAge){
    if(humanAge > 0){
    let dogYears = humanAge * 7;
    console.log(`Your human has ${dogYears} dog years!`)
    }


else if(dogAge > 0){
    let humanYears = dogAge / 7;
    console.log(`Your dog has ${humanYears} human years!`)
}
else{
    console.log("Wrong calculation");
}
}

calcAges(0 , 10);
calcAges(10 ,0);
