function takesFunctions(f1, f2) {
  console.log(f1("Alessia"));
  f2();
}

function greetPerson(name) {
  // return "Hello, " + name + "!";
  return `Hello, ${name}!`;
}

function sayGoodbye() {
  console.log("Goodbye!")
}

function altGreetPerson(name) {
  return name => {
    return `Hello, ${name}!`
  }
}

// "Normal usage"
// takesFunctions(greetPerson, sayGoodbye);

// Erroneous version -- like passing an element from
// array rather than the array itself.
// takesFunctions(greetPerson("Alessia"), sayGoodbye);

// Alt "incorrect" (but actually fine)
takesFunctions(altGreetPerson("Alessia"), sayGoodbye);