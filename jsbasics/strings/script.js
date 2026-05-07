let str = "this is a strinng";

console.log(str.charAt(5)); // i

console.log(str.toUpperCase());

let a = 3.14;

// Numbers do not have charAt directly
console.log(a.toString().charAt(2)); // 1

// toString must be called with ()
let b = a.toString();

console.log(b.charAt(2)); // 1

console.log(b); // "3.14"

let c = 3.154566454185;

console.log(c.toFixed(5)); // 3.15457