import Typed from 'typed.js'

const typedWrapper = {
	TYPE_SPEED: 1,

	typeText(event, element, text) {
		const CONFIG = {
			typeSpeed: this.TYPE_SPEED,
			strings: [text],
			onComplete: function () {
				event.target.offsetParent.childNodes[3].classList.remove('deactive')
			},
		}

		new Typed(element, CONFIG)
	},
}

export { typedWrapper }
