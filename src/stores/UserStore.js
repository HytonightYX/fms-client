import { observable, action } from 'mobx';
import {
	queryAllUsers,
	queryDelUserById,
	queryActivateUser,
	queryDeactivateUser
} from '../services/api'
import { failureMsg, successMsg } from '../services/utils'

class UserStore {

	@observable
	currentUser

	@observable
	loadingUser

	@observable
	updatingUser

	@observable
	updatingUserErrors

	@observable
	allUsers = undefined

	@action
	login(user) {
		this.loadingUser = true;
		this.currentUser = user
	}

	@action
	updateUser(newUser) {
		this.updatingUser = true;
		// return agent.Auth.save(newUser)
		// 	.then(action(({ user }) => { this.currentUser = user; }))
		// 	.finally(action(() => { this.updatingUser = false; }))
	}

	@action
	logout() {
		this.currentUser = undefined;
	}

	@action
	async loadAllUsers() {
		this.allUsers = await queryAllUsers();
		console.log('get all users')
	}

	@action
	async delUserById(id) {
		const r = await queryDelUserById(id)
		this.procRes(r)
	}

	@action
	async activate(id) {
		const r = await queryActivateUser(id)
		this.procRes(r)
	}

	@action
	async deactivate(id) {
		const r = await queryDeactivateUser(id)
		this.procRes(r)
	}

	procRes = (r) => {
		console.log(r)
		if (r.errorCode === 0) {
			successMsg(r.message, 0.7)

			// 刷新allUser(表格)
			this.loadAllUsers()
				.catch(e => {
					console.log(e)
				})

		} else {
			failureMsg(r)
		}
	}
}

export default new UserStore();
