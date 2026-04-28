console.log("hello world");


let c=5;

var b=10;
var b=25;


const pi=3.14;

console.log("a")

// arithmetic  operations 
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0 (remainder)



let e=10;
let y="10";

console.log(x==y);

console.log(x===y);

let e = 10;
let y = '10';

console.log(e == y);

// variables-practice.js

let a = 15;
let b = 4;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

// comparison
console.log(a > b);
console.log(a == "15");
console.log(a === "15");








// student-result.js

let name = "Atif";
let marks = 68;
let attendance = 82;

console.log("Student:", name);
console.log("Marks:", marks);
console.log("Attendance:", attendance);

if (marks >= 40 && attendance >= 75) {
    console.log("Status: Pass");
} else {
    console.log("Status: Fail");
}

let total = 0;
for (let i = 1; i <= 5; i++) {
    total += i;
}

console.log("Sum of 1 to 5:", total);

// student-analysis.js

let name = "Atif";
let marks = [75, 82, 68, 90, 55];

let total = 0;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

let average = total / marks.length;

console.log("Student:", name);
console.log("Total Marks:", total);
console.log("Average:", average);

if (average >= 90) {
    console.log("Grade: A");
} else if (average >= 70) {
    console.log("Grade: B");
} else if (average >= 40) {
    console.log("Grade: Pass");
} else {
    console.log("Grade: Fail");
}

function checkTopper(avg) {
    if (avg >= 85) {
        return "Topper";
    } else {
        return "Not Topper";
    }
}

console.log("Status:", checkTopper(average));


// simple JS practice file

// variables
let name = "Atif";
let age = 19;
let isStudent = true;

console.log("Name is: " + name);
console.log("Age is: " + age);

// if-else condition
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}

// array example
let marks = [70, 85, 90, 60, 75];

// loop through array
for (let i = 0; i < marks.length; i++) {
    console.log("Marks: " + marks[i]);
}

// calculate total marks
let total = 0;
for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
}

console.log("Total Marks: " + total);

// average calculation
let avg = total / marks.length;
console.log("Average Marks: " + avg);

// function example
function checkResult(avg) {
    if (avg >= 75) {
        return "Distinction";
    } else if (avg >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

let result = checkResult(avg);
console.log("Result is: " + result);

// another loop example
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}

// string comparison
let x = 10;
let y = "10";

if (x == y) {
    console.log("Equal (==)");
}

if (x === y) {
    console.log("Strict Equal (===)");
} else {
    console.log("Not Strict Equal");
}
// Simple student marks analyzer

let studentName = "Atif";
let marks = [78, 85, 62, 90, 55];

// function to calculate total marks
function getTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
}

// function to calculate average
function getAverage(total, count) {
    return total / count;
}

// function to check grade
function getGrade(avg) {
    if (avg >= 80) {
        return "A";
    } else if (avg >= 60) {
        return "B";
    } else if (avg >= 40) {
        return "C";
    } else {
        return "Fail";
    }
}

// main logic
let totalMarks = getTotal(marks);
let averageMarks = getAverage(totalMarks, marks.length);
let grade = getGrade(averageMarks);

// output
console.log("Student Name: " + studentName);
console.log("Total Marks: " + totalMarks);
console.log("Average: " + averageMarks);
console.log("Grade: " + grade);

// Simple Number Guessing Game

let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;

console.log("Guess a number between 1 to 10");

while (attempts > 0) {
    let userGuess = prompt("Enter your guess:");

    // convert string to number
    userGuess = Number(userGuess);

    if (userGuess === secretNumber) {
        console.log("🎉 Correct! You guessed the number.");
        break;
    } else if (userGuess > secretNumber) {
        console.log("Too high!");
    } else if (userGuess < secretNumber) {
        console.log("Too low!");
    } else {
        console.log("Invalid input");
    }

    attempts--;

    if (attempts > 0) {
        console.log("Attempts left: " + attempts);
    } else {
        console.log("Game Over! The number was: " + secretNumber);
    }
}