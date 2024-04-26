// JS Tester - https://playcode.io/javascript

// Task 1 - Print the first 10 square numbers (1*1 = 1, 2*2 = 4, etc.)

console.log("Task 1");

for (i = 1; i < 11; i++) {
    console.log(i * i);
}

// Task 2 - Count down from 5 to 1 then say "Blastoff!"

console.log("Task 2");

for (i = 6; i > 1; i--) {
    console.log(i);
}

console.log("Blastoff!")

// Task 3 - Print the even numbers from 1 to 50 (including 50)

console.log("Task 3");

for (i = 0; i < 51; i += 2) {
    console.log(i);
}

// Task 4 - Print the sum of 1 through 100.

console.log("Task 4");

let sum = 0;
for (i = 1; i < 101; i++) {
    sum += i;
}

console.log(sum)

// Task 5 - Print the first 10 factorials. The factorial of a number n is n multiplied by each integer less than it, down to 1, written as n!

console.log("Task 5");

let factorial = 1;

for (i = 1; i < 11; i++) {
  factorial *= i;

  console.log(factorial);
}

// Task 6 - Add the array arr with [3, 1, 4, 1, 5, 9], and write a loop to log each element to the console.

console.log("Task 6");

let arr = [3, 1, 4, 1, 5];

for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Task 7 - Using a normal forward for-loop (for (let i = 0; i < arr.length; i++)), use .at() to log each element of arr in reverse order (i.e. 5, 1, 4, 1, 3)

console.log("Task 7");

for (i = -1; i >= -arr.length; i--) {
    console.log(arr.at(i));
}

// Task 8 - Starting with an empty array in a new variable, create a loop that adds the first 10 cube numbers (e.g. 1*1*1==1**3=1, 2*2*2==2**3==8, etc.) to the array, then log the array itself.

console.log("Task 8");



// Task 9 - Starting with an empty array in a new variable, add the first 10 fibonacci numbers to the array, then log the array itself.

console.log("Task 9");



// Task 10 - Starting with an empty array in a new variable, add the elements of arr to it in reverse order.

console.log("Task 10");


