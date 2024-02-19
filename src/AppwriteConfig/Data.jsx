import { Client, Storage,ID } from "appwrite";
import config from "../envConfig/Config";


export class StorageServices {
	client = new Client();
	storage;

	constructor() {
		this.client
			.setEndpoint(config.appwriteUrl)
			.setProject(config.appwriteProjectId)
		this.storage = new Storage(this.client)
	}

	async createFile (file){
		try {
			return await this.storage.createFile(
				config.appwriteBucketId,
				ID.unique(),
				file
			)
		} catch (error) {
			console.log('this is create file error ' + error);
		}
	}
	async deleteFile (fileId){
		try {
			return await this.storage.deleteFile(
				config.appwriteBucketId,
				fileId
			)
		} catch (error) {
			console.log('this is delete file error ' + error);
		}
	}
	async updateFile (fileId){
		try {
			return await this.storage.updateFile(
				config.appwriteBucketId,
				fileId
			)
		} catch (error) {
			console.log('this is delete file error ' + error);
		}
	}

	getFile (fileId){
		try {
			return this.storage.getFilePreview(
				config.appwriteBucketId,
				fileId
			)
		} catch (error) {
			console.log('this is delete file error ' + error);
		}
	}

}
const strageServices = new StorageServices()
export default strageServices;