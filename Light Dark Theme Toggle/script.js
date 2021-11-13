window.onload = () => {
  const currentTheme = localStorage.getItem("current__theme");
  const toggler = document.querySelector("#theme__icon");

  if (currentTheme && currentTheme === "dark__theme") {
    document.body.classList.add("dark__theme");
    toggler.src = "./images/sun.png";
  } else {
    document.body.classList.remove("dark__theme");
    toggler.src = "./images/moon.png";
  }
};

const toggleTheme = () => {
  const toggler = document.querySelector("#theme__icon");
  document.body.classList.toggle("dark__theme");

  if (document.body.classList.contains("dark__theme")) {
    toggler.src = "./images/sun.png";
    localStorage.setItem("current__theme", "dark__theme");
  } else {
    toggler.src = "./images/moon.png";
    localStorage.setItem("current__theme", "light__theme");
  }
};
