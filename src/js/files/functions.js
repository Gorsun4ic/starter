"use strict"

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
export function accordions(){
	const accordion = document.querySelectorAll('.accordion__item');

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

	function removeOpen(index1){
		accordion.forEach((item2, index2) => {
			if(index1 != index2) {
				item2.classList.remove("active");

				let content = item2.querySelector(".accordion__content");
				content.style.height = "0px";
			}
		})
	}
}
