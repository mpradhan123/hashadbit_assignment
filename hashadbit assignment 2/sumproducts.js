function sumOfProducts(n1, n2) {
  let str1 = n1.toString().split('').reverse().join('');
  let str2 = n2.toString().split('').reverse().join('');

  let sum = 0;

  for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
      let digit1 = i < str1.length ? parseInt(str1.charAt(i)) : 0;
      let digit2 = i < str2.length ? parseInt(str2.charAt(i)) : 0;
      sum += digit1 * digit2;
  }

  return sum;
}
let n1 = 6;
let n2 = 24;
let result = sumOfProducts(n1, n2);
console.log("Sum of products of corresponding digits: " + result);
