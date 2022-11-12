import { scrollToNextSlide } from './utilities/scrollToNextSlide.js'
import { decryptionTime } from './utilities/decryptionTime.js'
import { cryptingHook } from './utilities/cryptingHook.js'
import { typedWrapper } from './utilities/typedWrapper.js'

const SCROLLERS = document.querySelectorAll('.scroller')

const PUBLIC_KEY = document.querySelector('.public-key')
const PRIVATE_KEY = document.querySelector('.private-key')
const GENERATE_PUBLIC = document.querySelector('.generate-public')
const GENERATE_PRIVATE = document.querySelector('.generate-private')

const TEXT_TO_ENCRYPT = document.querySelector('.text-to-encrypt')
const ENCRYPT = document.querySelector('.encrypt')
const ENCRYPTED_TEXT_BOX = document.querySelector('.encrypted-text')
const DECRYPT = document.querySelector('.decrypt')
const DECRYPTED_TEXT_BOX = document.querySelector('.decrypted-text')

// initialize EventListeners on scroller's

SCROLLERS.forEach((scroller) => scroller.addEventListener('click', scrollToNextSlide))

// update percent of 128-key decryption

setInterval(() => {
	decryptionTime.setTimesDiff()
}, 1000)

// managing RSA keys

cryptingHook.initializeKeys()

GENERATE_PUBLIC.addEventListener('click', () => {
	typedWrapper.typeText(PUBLIC_KEY, cryptingHook.PUBLIC_KEY)
})
GENERATE_PRIVATE.addEventListener('click', () => {
	PRIVATE_KEY.innerText = cryptingHook.PRIVATE_KEY
})

ENCRYPT.addEventListener('click', () => {
	cryptingHook.encryptText(TEXT_TO_ENCRYPT.textContent)
	ENCRYPTED_TEXT_BOX.innerText = cryptingHook.ENCRYPTED_TEXT
})
DECRYPT.addEventListener('click', () => {
	cryptingHook.decryptText(cryptingHook.ENCRYPTED_TEXT)
	DECRYPTED_TEXT_BOX.innerText = cryptingHook.DECRYPTED_TEXT
})

// change scrollRestoration

history.scrollRestoration = 'manual'
