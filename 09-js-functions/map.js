let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// print the squares of all the numbers
list.forEach((e) => console.log(e * e));

// stores the squares
let squares = list.map((e) => e * e);

// implemented "by hand"
squares = []
for (const num of list) {
  let sq = num * num;
  squares.push(sq);
}
console.log(squares)