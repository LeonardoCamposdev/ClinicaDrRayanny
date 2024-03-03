// MENU HAMBURGUER NAVBAR
function initMenuMobile() {
  const btnMobile = document.querySelector(".btn-mobile");
  const headerMenu = document.querySelector(".header-menu");

  function ToggleMenu() {
    const nav = document.querySelector(".nav");
    const headerMenu = document.querySelector(".header-menu");
    nav.classList.toggle("active");
    headerMenu.classList.toggle("active");
  }

  btnMobile.addEventListener("click", ToggleMenu);
  headerMenu.addEventListener("click", ToggleMenu);
}
initMenuMobile();
// MENU HAMBURGUER NAVBAR//

// CONHEÇA O ESPAÇO TROCA DE IMG PRINCIPAL!!!
const imagens = document.querySelectorAll(".lista-espaço img");

function galeriaTrocar(event) {
  const principal = document.querySelector(".img-principal");
  const clicada = event.currentTarget;
  principal.src = clicada.src;
  principal.alt = clicada.alt;
}

function galeriaCLick(imagem) {
  imagem.addEventListener("click", galeriaTrocar);
}

imagens.forEach(galeriaCLick);
