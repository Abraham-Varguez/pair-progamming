"use strict";

//Easy

const even = [2, 4, 6, 8, 10];
const odd = [1, 3, 5, 6, 7, 9];

function oddOrEven(x) {
  let oddArr = [];
  let evenArr = [];

  for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 == 0) {
      evenArr.push(x[i]);
    } else {
      oddArr.push(x[i]);
    }
  }
  return console.log(`Even Numbers:  ${evenArr} Odd Numbers: ${oddArr}`);
}

oddOrEven([2, 4, 7, 11, 15, 16]);

//Easy 2


const isPrime = function (primes) {
  let newArr = [];
  let counter = 0;
  loop1: for (let i = 0; i < primes.length; i++) {
    for (let j = 2; j < primes[i]; j++) {
      if (primes[i] % j === 0) {
        continue loop1;
      }
    }
    if (primes[i] > 1) {
      newArr[counter] = primes[i];
      counter++;
    }
  }
  console.log(newArr);
};
isPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
isPrime([10, 35, 87, 22, 12, 1562, 1, 9, 11]);







//Medium

function countVowel(str) {
  const count = str.match(/[aeiou]/gi).length;
  return count;
}
console.log(countVowel("Javascript is fun"));

// Medium 2

function checkStringsAnagram(a, b) {
  let str1 = a.toLowerCase().split("").sort().join("").replaceAll(" ", "");
  let str2 = b.toLowerCase().split("").sort().join("").replaceAll(" ", "");
  if (str1 == str2) {
    console.log("True");
  } else {
    console.log("False");
  }
}
checkStringsAnagram("So dark the con of man", "Madonna of the Rocks");

//Medium 3
function GCD(x, y) {
  while (y) {
    const check = y;
    y = x % y; // changes y to the remainder to comare in the next line
    x = check; // compares what the reamainder is using the variable
  }
  return console.log(x);
}

GCD(336, 360);

GCD(78, 126);

//Medium 4

const car = {
  make: "Nissan",
  model: "Altima",
  year: "2010",
  mileage: 90000,
  color: "Blue",
  driveToWork: function () {
    this.mileage += 30;
    return console.log(`New Mileage: ${this.mileage}`);
  },
  driveAroundTheWorld: function () {
    this.mileage += 24000;
    return console.log(`New Mileage: ${this.mileage}`);
  },
  runErrands: function () {
    this.mileage += 33;
    return console.log(`New Mileage: ${this.mileage}`);
  },
};

console.log(car.mileage);

car.driveToWork();

car.runErrands();

car.driveAroundTheWorld();

//Hard

function matchingBrackets(str) {
  const map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (map[char]) {
      stack.push(char);
    } else if (char === "}" || char === "]" || char === ")") {
      const lastBracket = stack.pop();
      if (map[lastBracket] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(matchingBrackets("{hello world}")); // true
console.log(matchingBrackets("{hello [world]}")); // true
console.log(matchingBrackets("{hello [world)}")); // false
