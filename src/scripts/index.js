import { scrollToNextSlide } from './utilities/scrollToNextSlide.js'
import { decryptionTime } from './utilities/decryptionTime.js'
import { cryptingHook } from './utilities/cryptingHook.js'

const SCROLLERS = document.querySelectorAll('.scroller')

// initialize EventListeners on scroller's

SCROLLERS.forEach((scroller) => scroller.addEventListener('click', scrollToNextSlide))

// update percent of 128-key decryption

setInterval(() => {
	decryptionTime.setTimesDiff()
}, 1000)

// managing RSA keys

cryptingHook.initializeKeys()

// change scrollRestoration

history.scrollRestoration = 'manual'
