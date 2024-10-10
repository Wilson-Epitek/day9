const imagesData = [
  ["https://media.giphy.com/media/3oD3Yrwt1gRDhiQZ5S/giphy.gif", "Who am I"],
  [
    "https://media.giphy.com/media/3oD3YiCUVULluiN9WU/giphy.gif",
    "Happy sausage",
  ],
  ["https://media.giphy.com/media/3oD3YLTOkztY9xfiQE/giphy.gif", "Stripes"],
  ["https://media.giphy.com/media/l3UcCohhJm3KEhTWw/giphy.gif", "Tornadoes"],
  [
    "https://media.giphy.com/media/3oD3YiL23DDll9bAWc/giphy.gif",
    "Walking squares",
  ],
  ["https://media.giphy.com/media/26ufjJgVk087WtjEI/giphy.gif", "Cubes"],
  ["https://media.giphy.com/media/l3Ucp4ROadmpk7aVy/giphy.gif", "Hairy"],
  [
    "https://media.giphy.com/media/3oD3YOacdm13voG59K/giphy.gif",
    "The Beanstalk",
  ],
  ["https://media.giphy.com/media/l3UcDs1plijcJfOzC/giphy.gif", "Tiles"],
  ["https://media.giphy.com/media/3oD3YnBHaVfd0rSY1i/giphy.gif", "In and Out"],
  [
    "https://media.giphy.com/media/26ACqq4q3I8UDF3IA/giphy.gif",
    "Switching points",
  ],
];
generateCards(imagesData);

const container = document.getElementById("cards-list");
container.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    container.scrollLeft += 10;
    e.preventDefault();
  } else {
    container.scrollLeft -= 10;
    e.preventDefault();
  }
});

let zoom = document.getElementById("cards-list");
zoom.addEventListener("click", function (e) {
  if (e.target.closest(".card")) {
    let card = e.target.closest(".card");
    card.classList.toggle("zoomed");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => card.classList.remove("zoomed"));
  }
});
