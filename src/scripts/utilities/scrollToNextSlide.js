const scrollToNextSlide = () => {
	const WINDOW_HEIGHT = window.innerHeight
	const WINDOW_Y = window.scrollY

	window.scrollTo({
		top: WINDOW_Y + WINDOW_HEIGHT,
		behavior: 'smooth',
	})
}

export { scrollToNextSlide }
