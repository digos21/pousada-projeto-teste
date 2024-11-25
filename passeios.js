//ACOMODAÇÃO BOTÕES DO CARROUSEL

//Aqui estamos adicionando as funções dos botões do html

//Carousel das acomodações
let btnLeft = document.getElementById('prev_btn');
let btnRight = document.getElementById('next_btn');

//Aqui estamos atribuindo o container principal e o slider com os cards
let slider = document.querySelector('.container .slider');

// Quando o botão da direita for clicado ocorrerá o evento de passar o card a direita 
btnRight.addEventListener('click', nextSlide);

//função que pega o próximo card e avança
function nextSlide(){
	slider.appendChild(slider.firstElementChild);
}

// Quando o botão da esquerda for clicado ocorrerá o evento de passar o card a esquerda
btnLeft.addEventListener('click', prevSlide);

//função que pega o card anterior e retorna
function prevSlide(){
	slider.prepend(slider.lastElementChild);
}

/*
//função para deixar as passagens automáticas
function autoSlide(){
	deleteInterval = setInterval(timer, 2000);
	function timer(){
		nextSlide();
	}
}

//autoSlide();

//Quando o mouse passar por cima dos cards parar o automático
slider.addEventListener('mouseover', deleteAutoSliding);
btnRight.addEventListener('mouseover', deleteAutoSliding);
btnLeft.addEventListener('mouseover', deleteAutoSliding);

function deleteAutoSliding(){
	clearInterval(deleteInterval);
}

//Quando o mouse for retirado os cards voltam para a função no automático

slider.addEventListener('mouseout', autoSlide);
btnLeft.addEventListener('mouseout', autoSlide);
btnRight.addEventListener('mouseout', autoSlide);*/

//CÓDIGO PARA ATIVIDADES E PASSEIOS ---------------------------------------------------------

//Aqui estamos adicionando as funções dos botões do html
let botaoLeft = document.getElementById('left_btn');
let botaoRight = document.getElementById('right_btn');

//Aqui estamos atribuindo o container principal e o slider com os cards
let atividadeslider = document.querySelector('.atividades-container .atividades-slider');

// Quando o botão da direita for clicado ocorrerá o evento de passar o card a direita 
botaoRight.addEventListener('click', avancaSlide);

//função que pega o próximo card e avança
function avancaSlide(){
	atividadeslider.appendChild(atividadeslider.firstElementChild);
}

// Quando o botão da esquerda for clicado ocorrerá o evento de passar o card a esquerda
botaoLeft.addEventListener('click', retornaSlide);

//função que pega o card anterior e retorna
function retornaSlide(){
	atividadeslider.prepend(atividadeslider.lastElementChild);
}


