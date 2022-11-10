const decryptionTime = {
	ENTER_TIME: Date.now(),
	CRACK_TIME: 1200, // in seconds
	PERCENT_DISPLAY: document.querySelector('.percent-display'),

	getTimesDiff() {
		return Math.round((Date.now() - this.ENTER_TIME) / 1000)
	},
	calculatePercent() {
		return Math.round((this.getTimesDiff() / this.CRACK_TIME) * 10000) / 100
	},
	setTimesDiff() {
		this.PERCENT_DISPLAY.innerText = `${this.calculatePercent()}%`
	},
}

export { decryptionTime }
