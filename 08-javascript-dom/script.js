console.log("I am here!");

// window.addEventListener("load", ...);

function log() {
  console.log("Hello there! I'm a log.");
}

// let's see what this gives!
let para = document.getElementById("para");
console.log(para);
para.textContent = "Hello!";
para.addEventListener("click", log)
console.log("I am also here!");