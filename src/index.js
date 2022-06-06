// complete the function
function prime (num) {
  // code goes here

  // take input from user
const digit = prompt("Enter a positive Integer:");
const number = Number(digit);
let isPrime = true;

// check if number is equal to 1

if (number === 1) {
  console.log("oops! 1 is not a Prime number");
}

// check if number is greater than 1
else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;

    }
  }
  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is a not prime number`);
  }
}

// check if number is less than 1
else {
  console.log("The number is not a prime number.");
}
}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
