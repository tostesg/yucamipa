let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideDuration = 8000; // Tempo de cada slide em milissegundos (exemplo: 5000 = 5 segundos)

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, slideDuration);

function abrirModal(id) {
  document.getElementById(id).style.display = 'block';
}

function fecharModal(id) {
  document.getElementById(id).style.display = 'none';
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
};

function irPara(pagina) {
  window.location.href = pagina;
}
