const container = document.querySelector('.container')

const section1 = document.querySelector('#section1')
const section2 = document.querySelector('#section2')
const section3 = document.querySelector('#section3')
const section4 = document.querySelector('#section4')

const goTop = () => {		
	container.scroll({
		top: 0, 
		left: 0, 
		behavior: 'smooth'
	})
}

// ************************************************************

const scrollReveal = () => {
	let revealPoint = 150;
	let revealElement = document.querySelectorAll('.content');

	for (let i = 0; i < revealElement.length; i++) {
		let windowHeight = window.innerHeight;
		let revealTop = revealElement[i].getBoundingClientRect().top;

		if (revealTop < windowHeight - revealPoint) {
			revealElement[i].classList.add('active');
		} else {
			revealElement[i].classList.remove('active');
		}
	}
}

container.addEventListener('scroll', () => {
    scrollReveal()    
})

scrollReveal()