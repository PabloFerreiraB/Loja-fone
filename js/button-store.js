let valorInicial = 10;
const $buttonSecond = document.querySelector(".-second");

$buttonSecond.addEventListener("click", handleClick);

function handleClick() {
  const $cart = document.querySelector(".-last");

  $cart.textContent = `Carrinho (${++valorInicial})`;
}
