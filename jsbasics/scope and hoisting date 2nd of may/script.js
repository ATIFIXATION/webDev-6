// let test = "this is local test variable";

// function classA() {
//   console.log("class A", test);
// }
// function classB() {
//   console.log("class B", test);
// }
// function classc() {
//   let test2 = "this is local variable";
//   console.log("class c", test);
//   console.log("classc", test2);
// }

// function classd() {}

// function classe() {}

// function classf() {}

// function classg() {}

// classA();
// classB();
// classc();
// classd();
// classe();

//global variable  scope

let name = "Atif"; // global variable

function showName() {
  console.log(name); // accessible here
}

showName();
console.log(name); // also accessible here

//local scope

function test() {
  let x = 10; // local variable
  console.log(x); // works
}

test();
console.log(x); // Error: x is not defined

//block  scope

{
  let a = 5;
  const b = 10;
  console.log(a, b); // works
}

console.log(a); // ❌ Error
console.log(b); // ❌ Error


let naaam="nayan";

function jaanpehchan()
{

    console.log(naaam);


}


   



