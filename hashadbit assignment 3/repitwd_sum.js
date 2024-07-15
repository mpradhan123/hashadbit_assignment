function repeatedSumOfDigits(number) {
    function sumOfDigits(num) {
        return num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    
    let result = number;
    while (result >= 10) {
        result = sumOfDigits(result);
    }
    
    return result;
}
let number = 456;
let result = repeatedSumOfDigits(number);
console.log(`Repeated sum of digits of ${number} until single digit: ${result}`);
