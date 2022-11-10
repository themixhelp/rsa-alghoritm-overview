import { JSEncrypt } from 'jsencrypt'

const cryptingHook = {
	JSE: new JSEncrypt({ default_key_size: 128 }),

	PUBLIC_KEY: null,
	PRIVATE_KEY: null,

	generatePublicKey() {
		this.PUBLIC_KEY = this.JSE.getPublicKey()
	},
	generatePrivateKey() {
		this.PRIVATE_KEY = this.JSE.getPrivateKey()
	},

	initializeKeys() {
		this.generatePublicKey()
		this.generatePrivateKey()
	},
}

export { cryptingHook }
