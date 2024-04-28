"use strict";
//Maximum and Minimum Number Function
function findMax(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty");
    }
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
function findMin(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty");
    }
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}
const numbers = [15, 5, 20, 10, 30];
const maxNumber = findMax(numbers);
const minNumber = findMin(numbers);
console.log("Maximum number:", maxNumber);
console.log("Minimum number:", minNumber);
