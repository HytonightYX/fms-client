import { observable, action } from 'mobx';
import {
	queryAllUsers,
	queryDelUserById,
	queryActivateUser,
	queryDeactivateUser,
	queryRegisterUser,
	queryUpdateUser,
	queryLogin
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
	async login(user) {
		const res = await queryLogin(user.userName, user.password)
		console.log(res)
		this.currentUser = res
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

	@action
	async register(user) {
		const r = await queryRegisterUser(user)

		this.procRes(r)
	}

	@action
	async updateUser(user) {
		const r = await queryUpdateUser(user)
		this.procRes(r)
	}

	procRes = (r) => {
		console.log('procRes', r)
		if (r && r.errorCode === 0) {
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
