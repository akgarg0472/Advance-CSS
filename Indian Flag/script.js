const spokes = document.getElementsByClassName("spoke");

for (let index = 0; index < spokes.length; index++) {
  const spoke = spokes[index];
  spoke.style.transform = `rotate(${15 * index}deg)`;
}

const flowers = [
  "./images/rose1.png",
  "./images/rose2.png",
  "./images/rose3.png",
];

const generateFlower = (flowerImage) => {
  const flower = document.createElement("span");
  flower.style.background = `url("${flowerImage}")`;
  const marginLeft = `${Math.floor(Math.random() * 100)}%`;
  console.log(marginLeft);
  flower.style.marginLeft = marginLeft;
  flower.style.top = `${0}px`;
  flower.className = "flower";
  document.body.appendChild(flower);

  setTimeout(() => {
    document.body.removeChild(flower);
  }, 3000);
};

setInterval(() => {
  const flowerNumber = Math.ceil(Math.random() * 2 - 1);
  generateFlower(flowers[flowerNumber]);
}, 1000 + 1000 * Math.random());
