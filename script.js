const burger = document.querySelector('.burger')
const menu = document.querySelector('.nav__menu')
burger.addEventListener('click', function () {
	menu.classList.toggle('active')
})

class Play {
	constructor(first, second, ticket, close) {
		this.first = first
		this.second = second
		this.ticket = ticket
		this.close = close
		this.openTicket()
		this.closeTicket()
	}

	openTicket() {
		this.first.addEventListener('click', () => {
			this.ticket.classList.toggle('activeTicket')
		})
		this.second.addEventListener('click', () => {
			this.ticket.classList.toggle('activeTicket')
		})
	}

	closeTicket() {
		this.close.addEventListener('click', () => {
			this.ticket.classList.remove('activeTicket')
		})
	}
}

let firstBtn = document.querySelector('.nav__play')
let secondBtn = document.querySelector('.header__play')
let ticket = document.querySelector('.ticket')
let closeBtn = document.querySelector('.ticket__close')
const btns = new Play(firstBtn, secondBtn, ticket, closeBtn)
