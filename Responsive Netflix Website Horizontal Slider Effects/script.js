const centerDiv = document.getElementById("center__div");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=20")
  .then((resp) => resp.json())
  .then((resp) => {
    resp.map((val) => {
      key = val.id;
      let image = document.createElement("img");
      image.src = `https://picsum.photos/200/300?random=${key}`;
      centerDiv.appendChild(image);
    });
  })
  .catch((err) => {
    alert(`Error fetching images, Please try again later\n${err}`);
  });
