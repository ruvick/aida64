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