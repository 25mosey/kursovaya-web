const slider = document.querySelector('.container2');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.menu, .menu2'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const Width = slider.clientWidth;
  const slideOffset = -slideIndex * Width;
  slider.style.transform = `translateX(${slideOffset}px)`;
};

window.addEventListener('load', () => {
  slide();
});
/* Снизу будет ксс код для дроп даун меню */
document.addEventListener('DOMContentLoaded', function () {
	const accordionHeaders = document.querySelectorAll('.accordion-header');
  
	accordionHeaders.forEach(header => {
	  header.addEventListener('click', function () {
		const accordionItem = this.parentElement;
		const accordionContent = accordionItem.querySelector('.accordion-content');
  
		if (accordionItem.classList.contains('active')) {
		  accordionItem.classList.remove('active');
		  header.style.backgroundColor = ''; // Возвращаем стандартный цвет фона
		  accordionContent.style.maxHeight = 0;
		} else {
		  // Закрываем все секции
		  closeAllSections();
  
		  accordionItem.classList.add('active');
		  header.style.backgroundColor = '#D5621D'; // Новый цвет фона для активного состояния
		  accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
		}
	  });
	});
  
	function closeAllSections() {
	  accordionHeaders.forEach(header => {
		const accordionItem = header.parentElement;
		const accordionContent = accordionItem.querySelector('.accordion-content');
		accordionItem.classList.remove('active');
		header.style.backgroundColor = ''; // Возвращаем стандартный цвет фона
		accordionContent.style.maxHeight = 0;
	  });
	}
  });
  
  