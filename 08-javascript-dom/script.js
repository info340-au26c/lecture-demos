console.log("I am here!");

window.addEventListener("load", initialize);

function initialize() {
  let para = document.getElementById("para");
  console.log(para);
  para.textContent = "Hello!";
  para.addEventListener("click", log);
}

function log() {
  console.log("Hello there! I'm a log.");
}

console.log("I am also here!");