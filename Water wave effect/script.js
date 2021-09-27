const waves = document.getElementsByClassName("wave");

for (let i = 1; i < waves.length; i++) {
  const child = waves[i];
  child.style.animationDelay = `0.${i}s`;
}
