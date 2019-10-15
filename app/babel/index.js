const form = document.querySelector('.form');
const removeClass = () => {
	form.classList.remove('view-s', 'view-m', 'view-l');
};

const responsive = () => {
	if(form.clientWidth < 640) {
		removeClass();
		form.classList.add('view-s');
	} else if(form.clientWidth < 1024) {
		removeClass();
		form.classList.add('view-m');
	} else if(form.clientWidth < 1600) {
		removeClass();
		form.classList.add('view-l');
	} else {
		removeClass();
	}
};

responsive();
window.addEventListener('resize', responsive);
