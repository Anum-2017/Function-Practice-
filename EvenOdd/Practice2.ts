// find the Even and odd number function

function checkOddEven(num: number): string {
    if (num % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

const numberToCheck = 8 ;
const numberToCheck1 = 5;
const result = checkOddEven (numberToCheck) ;
const result1 = checkOddEven (numberToCheck1);
console.log(`${numberToCheck} is an ${result} number & ${numberToCheck1} is an ${result1} number`);