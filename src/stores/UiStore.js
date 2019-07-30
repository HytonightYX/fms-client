import { observable, action } from 'mobx';

class UiStore {

	@observable
	siderMenu

	@action
	pullUser() {
		this.loadingUser = true;
		this.currentUser = {
			username: 'admin'
		}
		// return agent.Auth.current()
		// 	.then(action(({ user }) => { this.currentUser = user; }))
		// 	.finally(action(() => { this.loadingUser = false; }))
	}
}

export default new UiStore();
