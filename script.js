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
  const clicada = event.currentTarget; // vai marcar a img clicada um target
  principal.src = clicada.src; // vai trocar a img principal por a img que esta com o target
  principal.alt = clicada.alt; // vai trocar a img principal por a img que esta com o target
}

imagens.forEach((imagem) => {
  imagem.addEventListener("click", galeriaTrocar);
});
// CONHEÇA O ESPAÇO TROCA DE IMG PRINCIPAL!!!

// PERGUNTAS FREQUENTES
const dtPergunta = document.querySelectorAll(".dt-pergunta");
const activeClass = "ativo";

dtPergunta[0].classList.add(activeClass);
dtPergunta[0].nextElementSibling.classList.add(activeClass);
function ativarResposta() {
  this.classList.toggle(activeClass); //dt
  this.nextElementSibling.classList.toggle(activeClass); //dd
}

dtPergunta.forEach((item) => {
  item.addEventListener("click", ativarResposta);
});

ativarResposta();
// PERGUNTAS FREQUENTES
