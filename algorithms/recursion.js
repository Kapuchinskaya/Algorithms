//recursion with solution
//https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php

/* FACTORIAL */
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
// console.log(factorial(5));

/* SUM */
function sum(n) {
  if (n > 0) {
    return n + sum(n - 1);
  } else {
    return n;
  }
}
// console.log(sum(+5));

/*GCD */
function findGsd(divisor, n, m) {
  if ((n % divisor === 0 && m % divisor === 0) || divisor === 1) {
    return divisor;
  }
  return findGsd(divisor - 1, n, m);
}

function gcd1(n, m) {
  let divisor = Math.min(n, m);
  return findGsd(divisor, n, m);
}
// console.log(gcd1(1000, 100));

function gsd2(n, m) {
  if (m === 0) return n;
  return gsd2(m, n % m);
}

// console.log(gsd2(500, 628));

/*GET the integers in range (x, y)*/
/*NOTE: assuming that the input is an integer */
let arr = [];
function ints(x, y) {
  if (x === y) return [];
  let min = Math.min(x, y);
  let max = Math.max(x, y);
  if (max - min === 1) {
    return arr;
  } else {
    arr.push(min + 1);
    return ints(min + 1, max);
  }
}
// console.log(ints(1, 7));

/*the sum of an array of integers */
