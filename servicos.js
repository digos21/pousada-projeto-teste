let scrollContainer = document.querySelector(".card-container");
let autoScrollInterval;

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

// Função para iniciar o autoScroll
function startAutoScroll() {
  let direction = 1; // 1 para rolar para frente, -1 para rolar para trás

  autoScrollInterval = setInterval(() => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += direction * 250; 
    if (
      scrollContainer.scrollLeft + scrollContainer.clientWidth >=
      scrollContainer.scrollWidth
    ) {
      direction = -1;
    } else if (scrollContainer.scrollLeft <= 0) {
      direction = 1;
    }
  }, 1500); 
}

// Função para parar o autoScroll
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Inicia o autoScroll ao carregar
startAutoScroll();

// Eventos para pausar e retomar o autoScroll
scrollContainer.addEventListener("mouseover", stopAutoScroll);
scrollContainer.addEventListener("mouseleave", startAutoScroll);