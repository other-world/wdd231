const gridButton = document.querySelector('#gridToggle');
const listButton = document.querySelector('#listToggle');

const listType = "grid"; 

gridButton.addEventListener('click', () => {
	mainNav.classList.toggle('show');
	hamButton.classList.toggle('show');
	//toggleMenuButton();
});