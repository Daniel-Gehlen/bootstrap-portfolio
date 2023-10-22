const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.question');
    const answer = item.querySelector('.answer');

    question.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});

// Seleciona o link "Other projects" e o submenu
const otherProjectsLink = document.getElementById("other-projects-link");
const submenu = document.querySelector(".submenu");

// Variável de controle para o estado do submenu (inicialmente oculto)
let submenuVisible = false;

// Oculta o submenu no carregamento da página
submenu.style.display = "none";

// Adiciona um evento de clique ao link "Other projects"
otherProjectsLink.addEventListener("click", function() {
  if (submenuVisible) {
    submenu.style.display = "none";
    submenuVisible = false;
  } else {
    submenu.style.display = "block";
    submenuVisible = true;
  }
});



