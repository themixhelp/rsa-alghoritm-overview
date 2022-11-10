import { JSEncrypt } from 'jsencrypt'

const cryptingHook = {
	JSE: new JSEncrypt({ default_key_size: 128 }),

	publicKey: null,
	privateKey: null,

	generatePublicKey() {
		this.publicKey = this.JSE.getPublicKey()
	},
	generatePrivateKey() {
		this.privateKey = this.JSE.getPrivateKey()
	},

	initializeKeys() {
		this.generatePublicKey()
		this.generatePrivateKey()
	},
}

export { cryptingHook }
