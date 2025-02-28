let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

let menuIcon = document.querySelector(".mobile-menu");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");
};

/* pode arrancar não serve tá dando bug no menu e não tem necessidade
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + " ]")
          .classList.add("active");
      });
    }
  });
};
*/

// Evento para fechar o menu ao clicar fora
document.addEventListener("click", (event) => {
  const isClickInsideMenu = navbar.contains(event.target);
  const isClickOnMenuIcon = menuIcon.contains(event.target);

  if (!isClickInsideMenu && !isClickOnMenuIcon) {
    menuIcon.classList.remove("active"); // Remove a classe 'active' do ícone
    navbar.classList.remove("active"); // Remove a classe 'active' do menu
  }
});

// Evento para fechar o menu ao clicar em um link do menu
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("active"); // Remove a classe 'active' do ícone
    navbar.classList.remove("active"); // Remove a classe 'active' do menu
  });
});
