import {
	bodyLockStatus,
	bodyLockToggle,
	bodyUnlock,
	bodyLock,
} from './functions'

export function popup(popupOpenButtonName, popupName, popupCloseButtonName) {
	const popupOpenButton = document.querySelector(popupOpenButtonName)
	const popup = document.querySelector(popupName)
	const popupCloseButton = document.querySelector(popupCloseButtonName)
	// Call this function to open popup
	function popupOpen() {
		document.body.classList.add('_lock') // Activate lock styles
		document.body.classList.add('popup-show')
		popup.classList.add('popup-show')
		popup.setAttribute('data-popup', '')
		bodyLock() // Activate lock script
	}
	// Call this function to close popup
	function popupClose() {
		document.body.classList.remove('popup-show')
		document.body.classList.remove('_lock')
		popup.classList.remove('popup-show')
		bodyUnlock()
	}
	// If popup open button, popup and popup open exist:
	if (popupOpenButton && popup && popupCloseButton) {
		popupOpenButton.addEventListener('click', function (e) {
			popupOpen()
			// To avoid mistakes check if popup activated, if yes:
			if (popup.hasAttribute('data-popup')) {
				document.addEventListener('keydown', function (event) {
					// If user will press escape button or q button popul will close
					if (event.key === 'Escape' || event.key === 'q') {
						popupClose()
					}
				})
				document.addEventListener('click', function (e) {
					// If the user is pressed on some area except for Popup (it's wrapper), popup will close
					if (e.target === document.querySelector('.wrapper')) {
						popupClose()
					}
				})
				// If user pressed on close button
				popupCloseButton.addEventListener('click', function (e) {
					popupClose()
				})
			}
		})
	}
}
// First argument - name of popup open button
// Second argument - name of popup window
// Third argument - name of popup close button
popup('.universal', '.popup1', '.close-button')
