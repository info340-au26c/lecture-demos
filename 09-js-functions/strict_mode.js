//a function that expects a person object
function getGrowthRate({height, age}) {
  return height / age;
}

// an example person object
const ada = {name: 'Ada', age: 20, height: 140}
const adaGrowth = getGrowthRate(ada);
console.log(adaGrowth)