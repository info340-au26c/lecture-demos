// const numbers = [1, 2, 3];

// // "previous" -> "accumulator"
// let result = numbers.reduce((prev, curr) => prev + curr);

// console.log("Reduce sum: " + result);






















let foods = ["pizza", "pizza", "pizza", "donut", "donut", "pasta", "pasta", "sushi", "dumplings", "dumplings", "donut", "pizza"];
result = foods.reduce((accumulator, current) => {
  if (accumulator[current] === undefined) {
    accumulator[current] = 1;
  } else {
    accumulator[current] += 1;
  }
  return accumulator;
}, {})
console.log(result);