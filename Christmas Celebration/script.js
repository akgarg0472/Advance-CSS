const mainContainer = document.querySelector(".main__container");
const gifts = [1, 2, 3];

const createGift = (giftImage) => {
  const gift = document.createElement("div");
  gift.innerHTML = `<img src="./images/gift${giftImage}.png" />`;
  gift.style.marginLeft = `${Math.floor(Math.random() * 90)}%`;
  gift.style.top = `${00}px`;
  gift.className = "gift__container";
  document.body.appendChild(gift);

  gift.addEventListener("animationend", () => {
    // document.body.removeChild(gift);
    gift.style.top = "85%";

    setTimeout(() => {
      document.body.removeChild(gift);
    }, 1250);
  });
};

createGift(gifts[Math.floor(Math.random() * 2)]);

setInterval(() => {
  createGift(gifts[Math.floor(Math.random() * 2)]);
}, Math.floor(Math.random() * 5000));
