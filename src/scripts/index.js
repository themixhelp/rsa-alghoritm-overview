import { scrollToNextSlide } from './utilities/scrollToNextSlide.js'
import { decryptionTime } from './utilities/decryptionTime.js'

const SCROLLERS = document.querySelectorAll('.scroller')
SCROLLERS.forEach((scroller) => scroller.addEventListener('click', scrollToNextSlide))

setInterval(() => {
	decryptionTime.setTimesDiff()
}, 1000)

history.scrollRestoration = 'manual'
