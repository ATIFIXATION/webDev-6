let abc = function () {
  console.log("hello world");
};

console.log(abc);

abc();

//always use const while writing    any function coz when u use let then it will coz some sort of a trouble

const plus = function (a, b) {
  return a + b;
};

console.log(plus(20, 30));

//multiplication
const multi = function (o, p) {
  return o * p;
};

console.log(multi(60, 3));

//arrow function (it is basically used to minimize the content of code in js)
let subs = (v, n) => v - n;
console.log(subs(8, 6));

let sum1 = (z, q) => z + q;
console.log(sum1(58, 20));
