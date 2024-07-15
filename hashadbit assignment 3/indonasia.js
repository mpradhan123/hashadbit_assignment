let string = 'INDIA';
let charArray = string.split('');
charArray.splice(3, 0, 'O', 'N', 'E', 'S');
let result = charArray.join('');

console.log(result);
