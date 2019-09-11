import { observable, action } from 'mobx';
import {
	queryAllRoles,
	queryDividedUser
} from '../services/api'

class RoleStore {
	@observable
	allRoles = undefined

	@observable
	dividedUser = undefined

	@action
	async loadAllRoles() {
		this.allRoles = await queryAllRoles();
		console.log('get all roles')
	}

	@action
	async loadDividedUser(rid) {
		this.dividedUser = await queryDividedUser(rid)
		console.log('rid:' + rid, this.dividedUser)
	}
}

export default new RoleStore();
