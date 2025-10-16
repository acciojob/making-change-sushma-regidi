function makeChange(amount) {
  // initialize result object
  let change = { q: 0, d: 0, n: 0, p: 0 };

  // calculate quarters
  change.q = Math.floor(amount / 25);
  amount = amount % 25;

  // calculate dimes
  change.d = Math.floor(amount / 10);
  amount = amount % 10;

  // calculate nickels
  change.n = Math.floor(amount / 5);
  amount = amount % 5;

  // remaining are pennies
  change.p = amount;

  return change;
}

// Example usage
console.log(makeChange(47)); // { q: 1, d: 2, n: 0, p: 2 }
console.log(makeChange(24)); // { q: 0, d: 2, n: 0, p: 4 }

