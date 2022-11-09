import { scrollToNextSlide } from './utilities/scrollToNextSlide.js'

history.scrollRestoration = 'manual'

const SCROLLERS = document.querySelectorAll('.scroller')
SCROLLERS.forEach((scroller) => scroller.addEventListener('click', scrollToNextSlide))
