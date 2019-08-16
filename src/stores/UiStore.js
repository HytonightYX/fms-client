import { observable, action } from 'mobx';

import {querySiderMenu} from '../services/api'

class UiStore {

	@observable
	siderMenu = undefined

	@action
	async loadSiderMenu() {
		this.siderMenu = await querySiderMenu();
	}
}

export default new UiStore();
