let counter = 2;

setInterval(() => {
  document.getElementById(`radioBtn${counter++}`).checked = true;

  if (counter > 5) {
    counter = 1;
  }
}, 5000);
