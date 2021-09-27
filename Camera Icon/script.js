const flash = () => {
  const flashElement = document.getElementById("camera__flash");
  flashElement.classList.add("flash__animation");
  setTimeout(() => {
    flashElement.classList.remove("flash__animation");
  }, 500);
};
