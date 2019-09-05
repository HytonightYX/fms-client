import { observable, action } from 'mobx';

import {
	queryAllSingleFiles,
	queryLendAll
} from '../services/api'

class SingleFileStore {
	@observable
	allSingleFiles = undefined

	@action
	async loadAllSingleFiles() {
		this.allSingleFiles = await queryAllSingleFiles()
		console.log('loadAllSingle')
	}

	@action
	async lendAll(selected, lender) {
		await queryLendAll(selected, lender)
		console.log('query lend all')
	}
}

export default new SingleFileStore();
