import { observable, action } from 'mobx';
import {
	queryAllLendsByUserId,
	queryReturnSelected
} from '../services/api'

class LendStore {
	@observable
	userLends = undefined

	@action
	async loadAllLendsByUserId(uid) {
		this.userLends = await queryAllLendsByUserId(uid);
		console.log('get all lends by user id')
	}

	@action
	async returnSelected(ids) {
		await queryReturnSelected(ids)
		console.log('return selected')
	}
}

export default new LendStore();
