// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
import { isMobile, bodyUnlock, bodyLock } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

 // Получаем элементы
 const headerWrapper = document.querySelector('.header__wrapper');
 const header = document.querySelector('.header');

 // Функция для установки min-height
 const setMinHeight = () => {
	const height = headerWrapper.offsetHeight;
	header.style.minHeight = `${height}px`;
 };

 // Инициализация начальной высоты
 setMinHeight();

 // Создаем MutationObserver для отслеживания изменений
 const observer = new MutationObserver(() => {
	setMinHeight();
 });

 // Настраиваем наблюдатель для отслеживания изменений атрибутов и дочерних элементов
 observer.observe(headerWrapper, { attributes: true, childList: true, subtree: true });

 // Дополнительно можно использовать ResizeObserver для отслеживания изменений размеров
 const resizeObserver = new ResizeObserver(() => {
	setMinHeight();
 });

 // Начинаем наблюдение за изменениями размеров
 resizeObserver.observe(headerWrapper);
 //========================================================================================================================================================
 
//  Preloader
const preloader = document.querySelector(".preloader");
const $preloaderNum = document.querySelector(".preloader__status-number");
let preloaderTimeoutDuration = 20;
let preloaderPercent = 0;

if (preloader && $preloaderNum) {
    function updatePreloader() {
        if (preloaderPercent < 100) {
            preloaderPercent += 1;
            $preloaderNum.innerHTML = preloaderPercent; 
            setTimeout(updatePreloader, preloaderTimeoutDuration);
        } else {
            preloader.classList.add("preloader--end");
            setTimeout(() => {
                preloader.classList.add("is-hidden");
            }, 800);
        }
    }
    updatePreloader();
} 
 //========================================================================================================================================================
 
//  Video 
 if (!isMobile.any()) {
	const videoContainer = document.querySelector('.info__box');
	const video = document.querySelector('.info__video');

	videoContainer.addEventListener('mouseenter', () => {
			video.play();
	});

	videoContainer.addEventListener('mouseleave', () => {
			video.pause();
	});
}

//========================================================================================================================================================

import { gsap } from "gsap";

// Анимация шапки
function animateHeader() {

		const headerLogo = document.querySelector('.header__logo');
		const menuItems = document.querySelectorAll('.menu__list li');
		const actionsHeaderBtn = document.querySelector('.actions-header__btn');
		
		const tl = gsap.timeline();
		
		tl.to(headerLogo, {
				opacity: 1,
				x: 0,
				duration: 1,
				ease: "cubic-bezier(.5,0,0,1)",
		})
		.to(menuItems, {
				opacity: 1,
				x: 0,
				duration: 2,
				stagger: 0.3 // Задержка между появлениями пунктов меню
		}, "-=0.5") // Начинаем анимацию меню одновременно с окончанием анимации логотипа
		.to(actionsHeaderBtn, {
				opacity: 1,
				x: 0,
				duration: 1.5,
				ease: "cubic-bezier(.5,0,0,1)",
		}, "-=1.5")

	}

// Функция для анимации элементов 
function animateBanner() {
	const title = document.querySelector('.descp-banner__title');
	const subtitle = document.querySelector('.descp-banner__subtitle');
	const text = document.querySelector('.descp-banner__text');
	const btn = document.querySelector('.descp-banner__btn');
	const footnote = document.querySelector('.descp-banner__footnote');
	const image = document.querySelector('.image-banner__img-ibg img');

	// Анимация заголовка
	gsap.fromTo(title, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.5 });

	// Анимация подзаголовка
	gsap.fromTo(subtitle, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.5 });

	// Анимация текста
	gsap.fromTo(text, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, delay: 1 });

	// Анимация кнопки
	gsap.fromTo(btn, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.5, delay: 1.5 });

	// Анимация доп.текста
	gsap.fromTo(footnote, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5, delay: 2 });

	// Анимация изображения
	gsap.fromTo(image, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, delay: 2.5 });
}

// Основная функция для запуска анимаций
function startAnimation() {
	if (window.innerWidth > 1024) {
			animateHeader(); // Сначала анимируем шапку
			// Запускаем анимацию баннера после завершения анимации шапки
			gsap.delayedCall(2.3, animateBanner); // Задержка на время анимации шапки
	}
}

// Проверка при загрузке страницы
window.addEventListener('load', function() {
	setTimeout(startAnimation, 2300); // Запускаем startAnimation через 2 секунды
});

// Проверка при изменении размера окна
// window.addEventListener('resize', startAnimation);