'use strict'

// Body lock
export let bodyLockStatus = true
export let bodyLockToggle = (delay = 500) => {
	if (document.documentElement.classList.contains('lock')) {
		bodyUnlock(delay)
	} else {
		bodyLock(delay)
	}
}
export let bodyUnlock = (delay = 500) => {
	let body = document.querySelector('body')
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll('[data-lp]')
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index]
				el.style.paddingRight = '0px'
			}
			body.style.paddingRight = '0px'
			document.documentElement.classList.remove('lock')
		}, delay)
		bodyLockStatus = false
		setTimeout(function () {
			bodyLockStatus = true
		}, delay)
	}
}
export let bodyLock = (delay = 500) => {
	let body = document.querySelector('body')
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll('[data-lp]')
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index]
			el.style.paddingRight =
				window.innerWidth -
				document.querySelector('.wrapper').offsetWidth +
				'px'
		}
		body.style.paddingRight =
			window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
		document.documentElement.classList.add('lock')

		bodyLockStatus = false
		setTimeout(function () {
			bodyLockStatus = true
		}, delay)
	}
}

// Burger menu
export function burger() {
	const burger = document.querySelector('.burger')
	if (burger) {
		const menu = document.querySelector('.menu')
		burger.addEventListener('click', function (e) {
			document.body.classList.toggle('_lock')
			burger.classList.toggle('_active')
			menu.classList.toggle('_active')
			document.documentElement.classList.toggle('menu-open')
		})
	}
}
export function menuOpen() {
	bodyLock()
	document.documentElement.classList.add('menu-open')
}
export function menuClose() {
	bodyUnlock()
	document.documentElement.classList.remove('menu-open')
}

// Popup
export function popup() {
	const popup = document.querySelector('.popup');
	const popupOpenButton = document.getAttribute('data-popup');
	if (popupOpenButton) {
		console.log(popupOpenButton);
		popupOpenButton.addEventListener('click', function (e) {
			document.body.classList.toggle('_lock');
			popup.classList.add('_active');
		})
	}
}
// Tabs
export function tabs() {
	const tabsButtons = document.querySelectorAll('.tabs__button')
	const tabsContents = document.querySelectorAll('.tabs__content')

	tabsButtons.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabsButtons.forEach(tab => {
				tab.classList.remove('active')
			})
			tab.classList.add('active')

			tabsContents.forEach(content => {
				content.classList.remove('active')
			})
			tabsContents[index].classList.add('active')
		})
	})
}

// Accordions
export function accordions() {
	const accordion = document.querySelectorAll('.accordion__item')

	accordion.forEach((item, index) => {
		let label = item.querySelector('.accordion__label')
		label.addEventListener('click', () => {
			item.classList.toggle('active')
			let content = item.querySelector('.accordion__content')
			if (item.classList.contains('active')) {
				content.style.height = `${content.scrollHeight}px` //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
			} else {
				content.style.height = '0px'
			} //calling the funtion and also passing the index number of the clicked header
			removeOpen(index)
		})
	})

	function removeOpen(index1) {
		accordion.forEach((item2, index2) => {
			if (index1 != index2) {
				item2.classList.remove('active')

				let content = item2.querySelector('.accordion__content')
				content.style.height = '0px'
			}
		})
	}
}
