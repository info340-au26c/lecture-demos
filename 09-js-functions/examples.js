let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function square(list) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(`[${i}]^2:` + list[i] * list[i]);
  }
}

// square(numbers)

numbers.forEach((value, index) => {
  console.log(`[${index}]^2: ` + value * value)
})


// generate list of odd values in `numbers`
let odds = [];
// for (const num of numbers) {
//   if (num % 2 === 1) {
//     odds.push(num);
//   }
// }

// odds = numbers.filter(e => e % 2 === 1)

// console.log(odds)


let squares = []
// for (let i = 0; i < numbers.length; i++) {
//   squares.push(numbers[i] * numbers[i]);
// }
// console.log(squares)

squares = numbers.map(e => e*e)
console.log(squares)
console.log(numbers)