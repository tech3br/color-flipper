const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025
// #EF795F
// #36F849

// set main variables
const btn = document.getElementById("btn");
const inputColor = document.getElementById("inputColor");
const color = document.querySelector(".color");

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function toUpperCase() {
  color.innerHTML.toUpperCase();
}

function changeHexColor() {
  // initial hex hash character
  let hexColor = "#";
  // get random number
  let randomNumber = getRandomNumber();

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}

function setDefaultColor(event) {
  console.log("event", event);
  color.textContent = "red";
  document.body.style.backgroundColor = "red";
}

inputColor.addEventListener("keyup", function changeColor(event) {
  console.log("event", event.target.value);

  if (event.target.value !== "" && event.target.value.length < 8) {
    document.body.style.backgroundColor = event.target.value;
    color.textContent = event.target.value;
  }
});

// change color and backgroundColor with click of button;
btn.addEventListener("click", function () {
  changeHexColor();
});

// change color and backgroundColor by space keyPress
document.addEventListener("keypress", function (event) {
  console.log("event", event);
  if (event.keyCode === 32) {
    changeHexColor();
  }
});

// change color and backgroundColor by space keyPress
document.addEventListener("load", setDefaultColor);
