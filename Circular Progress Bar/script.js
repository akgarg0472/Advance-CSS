const percentage = document.querySelector("#number");
const number = parseInt(percentage.innerHTML);
let counter = 1;

setInterval(() => {
  if (counter > number) {
    clearInterval();
  } else {
    percentage.innerHTML = `${counter++}%`;
  }
}, 2000 / number);
