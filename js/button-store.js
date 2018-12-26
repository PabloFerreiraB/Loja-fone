const $buttonSecond = window.document.querySelector(".-second");
const $cart = window.document.querySelector(".-last");

$buttonSecond.addEventListener("click", handleClick);

function handleClick() {
  $cart.textContent = "Carrinho(11)";
}
