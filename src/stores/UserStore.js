import { observable, action } from 'mobx';
import { queryAllUsers } from '../services/api'
import axios from 'axios'

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
}

export default new UserStore();
