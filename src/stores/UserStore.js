import { observable, action } from 'mobx';

class UserStore {

	@observable
	currentUser

	@observable
	loadingUser

	@observable
	updatingUser

	@observable
	updatingUserErrors

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
}

export default new UserStore();
