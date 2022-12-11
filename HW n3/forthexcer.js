//Forth Excercise (ATM MACHINE)

let atmMoneyStatus = 10000;
let requestedMoney = Number(prompt("Enter the amount you want to withdraw"));
console.log("You requested :");
console.log(requestedMoney);

function withdrawal(requestedMoney) {
    if (atmMoneyStatus >= requestedMoney) {
        let moneyLeft = atmMoneyStatus - requestedMoney;
        console.log(`You have withdrawn ${requestedMoney} dolars, and ${moneyLeft} dolars left in the ATM`);
        return { requestedMoney, moneyLeft };
    }
    else {
        let noMoney = "Sorry, not enough money ";
        console.log(noMoney);
        return noMoney;
    }
}
withdrawal(requestedMoney);