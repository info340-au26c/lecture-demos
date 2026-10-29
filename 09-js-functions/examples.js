odds = list.map((e) => e * e).filter((e) => e % 2 === 1)
odds = list.filter((e) => e % 2 === 1).map((e) => e * e)


// option 1
temp = list.map((e) => e * e);
odds = temp.filter((e) => e % 2 === 1)

// option 2
temp = list.filter((e) => e % 2 === 1)
odds = temp.map((e) => e * e)
