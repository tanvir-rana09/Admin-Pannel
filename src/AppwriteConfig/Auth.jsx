import { Account, Client, ID } from "appwrite";
import config from "../envConfig/Config";

export class AuthServices {
	cleint = new Client();
	account;

	constructor() {
		this.cleint
			.setEndpoint(config.appwriteUrl)
			.setProject(config.appwriteProjectId);
		this.account = new Account(this.cleint)
	}

	async createAccount({ email, password, name }) {
		try {
			const user = await this.account.create(ID.unique(), email, password, name);
			if (user) {
				// login
				return this.login({ email, password })
			} else {
				return user
			}
		} catch (error) {
			console.log(' this is createaccount error ' + error);
		}
	}

	async login({ email, password }) {
		try {
			const login = await this.account.createEmailSession(email, password)
			if (login) {
				return login
			} else return null
		} catch (error) {
			console.log('Login error' + error)
		}
	}

	async getCurrentUser() {
		try {
			return await this.account.get()
		} catch (error) {
			console.log('this is user error ' + error);
		}
		return null
	}

	async logout() {
		try {
			return await this.account.deleteSessions();
		} catch (error) {
			console.log('this is logout error ' + error);
		}
	}

	async changeName(name) {
		try {
			return await this.account.updateName(name)
		} catch (error) {
			console.log('This Is Change name error' + error);
		}
	}
	async changeEmail({ email, name }) {
		try {
			return await this.account.updateEmail(email, name)
		} catch (error) {
			console.log('This Is Change email error' + error);
		}
	}
	async changePass({ oldpass, newpass }) {
		try {
			return await this.account.updatePassword(oldpass, newpass)
		} catch (error) {
			console.log('This Is Change password error' + error);
		}
	}
	async updatePref({fileId}) {
		try {
			return await this.account.updatePrefs({ fileId })
		} catch (error) {
			console.log("This is pref eerrror " + error);
		}
	}
	async getPref() {
		try {
			return await this.account.getPrefs()
		} catch (error) {
			console.log("This is pref eerrror " + error);
		}
	}
}

const authServices = new AuthServices();
export default authServices;
