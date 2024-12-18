const hamButton = document.querySelector('#menu');
const mainNav = document.querySelector('.navigation');
const asideNav = document.querySelector('#navMenu');


hamButton.addEventListener('click', () => {
	mainNav.classList.toggle('show');
	hamButton.classList.toggle('show');
	asideNav.classList.toggle('show');
	//toggleMenuButton();
});