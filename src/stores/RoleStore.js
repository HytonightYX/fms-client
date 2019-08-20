import { observable, action } from 'mobx';
import {
	queryAllRoles
} from '../services/api'

class RoleStore {
	@observable
	allRoles = undefined

	@action
	async loadAllRoles() {
		this.allRoles = await queryAllRoles();
		console.log('get all roles')
	}
}

export default new RoleStore();
