import Typed from 'typed.js'

const typedWrapper = {
    TYPE_SPEED: 10,

    typeText(element, text) {
        const CONFIG = {
            typeSpeed: this.TYPE_SPEED,
            strings: [ text ]
        }

        new Typed(element, CONFIG)
    }
}

export { typedWrapper }
