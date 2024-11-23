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