let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < list.length; i++) {
  console.log(list[i] * list[i]);
}

for (let [i, num] of list.entries()) {
  console.log("[" + i + "]: " + num * num);
}

list.forEach((e) => console.log(e * e))

list.forEach((e, i) => console.log("[" + i + "]: " + e * e))

function doStuff(e) {
  let n = e * e;
  let z = Math.sqrt(n);
  console.log(n);
}

list.forEach(doStuff)