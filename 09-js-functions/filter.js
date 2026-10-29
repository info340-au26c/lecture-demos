let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// get only the even numbers
let evens = [];
for (const num of list) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}
console.log(evens)

evens = list.filter((e) => e % 2 === 0);


let h1 = <h1>Hello World!</h1>;