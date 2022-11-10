const decryptionTime = {
	enterTime: Date.now(),
	crackTime: 1200, // in seconds
	percentDisplay: document.querySelector('.percent-display'),

	// setEnterTime() { this.enterTime = Date.now() },

	getTimesDiff() {
		return Math.round((Date.now() - this.enterTime) / 1000)
	},
	calculatePercent() {
		return Math.round((this.getTimesDiff() / this.crackTime) * 10000) / 100
	},
	setTimesDiff() {
		this.percentDisplay.innerText = `${this.calculatePercent()}%`
	},
}

export { decryptionTime }
