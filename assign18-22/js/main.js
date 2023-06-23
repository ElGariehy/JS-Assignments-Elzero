// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

///////////////  assign one //////////////////


let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num - num + num + num); // 6

// Soultion Three
console.log(num + num -(num % num)); // 6

// Soultion Four
console.log(num + num -(num % true)); // 6

// Solution Five
console.log(num * num - num); // 6

// Solution Six
console.log(num-- + ++num); // 6

///////////////  assign two //////////////////




let num1 = "10";

// Solution One
console.log(+num1 + +num1); // 20

// Solution Two
console.log(+num1++ + --num1 ); // 20

// Solution Three
console.log(num1-- + ++num1 ); // 20

// Solution Four
console.log(num1 * (true + true)); // 20

///////////////  assign three //////////////////


let points = 10;

// Write Your Code Here

console.log(points + true + true + true); // 13

// Write Your Code Here

console.log(points -true -true); // 8;
///////////////  assign four //////////////////