const prompt = require('prompt-sync')();
function findTax(salary) {
    let taxRate;
    
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.20;
            break;
        case (salary > 1500000):
            taxRate = 0.30;
            break;
        default:
            return "Error: Invalid salary";
    }
    
    return salary * taxRate;
}
let salary = parseFloat(prompt("Enter the salary:"));
let tax = findTax(salary);
console.log("Tax amount: " + tax);
