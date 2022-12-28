let arr1 = [19, 22, 18, 19, 16, 18, 19, 19, 24];
let arr2 = [44, 32, 44, 36, 16, 19, 44, 32, 44];
let arr3 = [22, 25, 26, 22, 25, 25, 25, 26, 25];

function findNumber(number, arr) {
    let counter = 0;
    for (newArr of arr) {
        if (newArr === number) {
            counter++;
        }
    }
    console.log(`There is ${counter} occurrences of number ${number} in the array`);
}

findNumber(19, arr1);
findNumber(44, arr2);
findNumber(25, arr3);
