let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ' ]').classList.add('active');
            })
        }
    })
}

// SLIDESOW -----------------------------------------------------------------------------------------

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function updateSlidePosition() {
  const offset = -currentIndex * 100;
  document.querySelector(
    ".slideshow"
  ).style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
  currentIndex += direction;

  // Loop para início ou fim das imagens
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  updateSlidePosition();
}

// Atualiza a posição inicial ao carregar a página
updateSlidePosition();

//imagem https://static.wixstatic.com/media/d28c03_62aa79344dcb4021b7d005a861825989~mv2.jpg/v1/fill/w_240,h_170,q_85,usm_0.66_1.00_0.01/d28c03_62aa79344dcb4021b7d005a861825989~mv2.jpg
