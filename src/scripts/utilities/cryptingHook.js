import { JSEncrypt } from 'jsencrypt'

const cryptingHook = {
	JSE: new JSEncrypt({ default_key_size: 1024 }),

	PUBLIC_KEY: null,
	PRIVATE_KEY: null,

	ENCRYPTED_TEXT: null,
	DECRYPTED_TEXT: null,

	generatePublicKey() {
		this.PUBLIC_KEY = this.JSE.getPublicKey()
	},
	generatePrivateKey() {
		this.PRIVATE_KEY = this.JSE.getPrivateKey()
	},

	encryptText(text) {
		this.JSE.setPublicKey(this.PUBLIC_KEY)
		this.ENCRYPTED_TEXT = this.JSE.encrypt(text)
	},
	decryptText(text) {
		this.JSE.setPrivateKey(this.PRIVATE_KEY)
		this.DECRYPTED_TEXT = this.JSE.decrypt(text)
	},

	initializeKeys() {
		this.generatePublicKey()
		this.generatePrivateKey()
	},
}

export { cryptingHook }
