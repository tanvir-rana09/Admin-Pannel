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
}

const authServices = new AuthServices();
export default authServices;
