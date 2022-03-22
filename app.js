const colors = ["green", "red", "rgba(133,122,200)", "#F15025"];
const btn = document.getElementById("btn");
const inputColor = document.getElementById("inputColor");
const color = document.querySelector(".color");

inputColor.addEventListener("keyup", function changeColor(event) {
  console.log("event", event.target.value);

  if (event.target.value !== "" && event.target.value.length < 8) {
    document.body.style.backgroundColor = event.target.value;
    color.textContent = event.target.value;
  }
});

btn.addEventListener("click", function () {
  // get random number between 0 - 3 colors[0]
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
