// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumUntilNegative(arr) {
    let sum = 0;
    for (const num of arr) {
        if (num < 0) {
            break;
        }
        sum += num;
    }
    return sum
};

function sumUntilNegatives(arr) {
    let sum = 0;
    for (let num = 0; num < arr.length; num++) {
        if (arr[num] < 0) {
            break;
        }
        sum += arr[num];
    }
    return sum;
}



let number = [1, 2, 3, 4, 5, 6, -7, 8, 9, 10];
console.log(sumUntilNegative(number));
console.log(sumUntilNegatives(number));