/* --------------------------------------------------
				navbar functionality
-------------------------------------------------- */
	const body = document.querySelector('body');
	const toggleNavbarBtn = document.querySelector('.hamburger-btn');
	const hiddenNavbarPart = document.querySelector('.hidden-navbar-section');
	const navbarInnerContainer = document.querySelector('.navbar-inner-container');
	window.onscroll = () => {
		if (window.scrollY > 0) {
			if (!navbarInnerContainer.classList.contains('navbar-shadow')) {
				navbarInnerContainer.classList.add('navbar-shadow');
			}
		} else {
			if (navbarInnerContainer.classList.contains('navbar-shadow')) {
				navbarInnerContainer.classList.remove('navbar-shadow');
			}
		}
	}
	

	toggleNavbarBtn.addEventListener('click', expandNavbar);

	

	function expandNavbar() {

		hiddenNavbarPart.classList.toggle('navbar-expanded');
		if (hiddenNavbarPart.classList.contains('navbar-expanded')) {
			navbarInnerContainer.classList.remove('navbar-shadow');
		} else {
			if (window.scrollY > 0) {
				navbarInnerContainer.classList.add('navbar-shadow');
			}
		}

		body.classList.toggle('stop-scrolling');
	}


	const ANIMATIONS = {
		
	}

/* --------------------------------------------------
				cards animations
-------------------------------------------------- */
const cardsGroup1 = querySelectorAll('.cards-container')
let tl1 = gspa.timeline();
tl1.from(cardsGroup1, {duration: 2, x: 25, ease: "linear", opacity: 0, rotationX:20, stagger: 1});


