//Fourth Excercise
function maxNumfunc() {
    let numArr = [2, 5, 60, 55, 90];
    let maxNum = numArr[0];
    for (i = 0; i < numArr.length; i++) {
        if (numArr[i] > maxNum) {
            maxNum = numArr[i];
        }
    }
    console.log(`The maximum number in the array is ${maxNum}`);
}

function minNumfunc() {
    let numArr = [2, 5, 60, 55, 90];
    let minNum = numArr[0];
    for (i = 0; i < numArr.length; i++) {
        if (numArr[i] < minNum) {
            minNum = numArr[i];
        }
    }
    console.log(`The minimum number in the array is ${minNum}`);
}
minNumfunc();
maxNumfunc();
