import { scrollToNextSlide } from './utilities/scrollToNextSlide.js'
import { decryptionTime } from './utilities/decryptionTime.js'
import { cryptingHook } from './utilities/cryptingHook.js'

const SCROLLERS = document.querySelectorAll('.scroller')

const PUBLIC_KEY = document.querySelector('.public-key')
const PRIVATE_KEY = document.querySelector('.private-key')
const GENERATE_PUBLIC = document.querySelector('.generate-public')
const GENERATE_PRIVATE = document.querySelector('.generate-private')

// initialize EventListeners on scroller's

SCROLLERS.forEach((scroller) => scroller.addEventListener('click', scrollToNextSlide))

// update percent of 128-key decryption

setInterval(() => {
	decryptionTime.setTimesDiff()
}, 1000)

// managing RSA keys

cryptingHook.initializeKeys()
GENERATE_PUBLIC.addEventListener('click', () => {
	PUBLIC_KEY.innerText = cryptingHook.PUBLIC_KEY
})
GENERATE_PRIVATE.addEventListener('click', () => {
	PRIVATE_KEY.innerText = cryptingHook.PRIVATE_KEY
})

// change scrollRestoration

history.scrollRestoration = 'manual'
