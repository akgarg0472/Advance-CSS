const waves = document.getElementsByClassName("wave");

for (let index = 1; index < waves.length; index++) {
  waves[index].style.animationDelay = `0.${index}s`;
}
