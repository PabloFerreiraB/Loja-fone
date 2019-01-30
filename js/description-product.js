const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener("click", handleClick);
$stars.forEach(function($star) {
  $star.addEventListener("click", handleClick);
});

function handleClick() {
  // Usando o "toggle"
  // Se tive a classe remove, se não adiciona
  this.classList.toggle("-active");
}

function handleClick() {
  this.classList.toggle("-active");
}
