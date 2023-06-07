import './scss/main.scss'


const carousel = document.querySelector('.carousel')
const items = carousel.querySelectorAll('.carousel-item')
const ind = Array.from(Array(items.length).keys())
// init item order
ind.push(ind.shift())


const setOrder = () => {
	// rotate item indexes
	ind.unshift(ind.pop())
	items.forEach((el,i)=>{
		items[i].style.order = ind[i]
	})
}


const moveStep = () => {
	carousel.style = ''
	const step = items[0].getBoundingClientRect().width
	setOrder()
	setTimeout(()=>{
		carousel.style = `transition: transform 0.5s ease-in-out; transform: translateX(-${step}px)`
	},10)
}


const orderItems = () => {
	moveStep()
	setInterval(()=>{
		moveStep()
	}, 2000)
}

window.addEventListener('load', orderItems)
