let numbers = [];
let type = undefined;
let resultNum = [];

function findNumber(numbers, type) {
   
    if (type === "odd") {
        for (num of numbers) {
            if (num % 2 === 1) {
                resultNum.push(num);
            }
         }
    }
    else if (type === "even") {
        for (num of numbers) {
            if (num % 2 === 0) {
                resultNum.push(num);
            }
        }
    }
    console.log(resultNum);
}

findNumber([2, 5, 8, 7, 9], "odd");