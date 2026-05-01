let a = 20;
let b = 30;

function sum(x, y) {
  let z = x + y;
  console.log(z);
}

sum(a, b);

//function without paramenter
function welcome()
{
    console.log("this is atif ");
}

welcome();



//function with return type

function subtraction(e, f) {
    return e - f;  // actually compute and return the result
}

let c = subtraction(20, 10);
console.log(c); // 10
