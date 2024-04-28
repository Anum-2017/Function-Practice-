// find to calculate the Average Function

function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Cannot calculate average of an empty array");
    }
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / numbers.length;
}

const numbers = [10, 20, 30, 40, 50];
const average = calculateAverage(numbers);
console.log("Average:", average);
