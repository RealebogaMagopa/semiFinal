const hamburger = document.querySelector('.head .nav-bar .nav-list .hamburger');
const cellphone = document.querySelector('.head .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.head .nav-bar .nav-list ul li a');
const head = document.querySelector('.head.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	cellphone.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		head.style.backgroundColor = '#29323c';
	} else {
		head.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		cellphone.classList.toggle('active');
	});
});

