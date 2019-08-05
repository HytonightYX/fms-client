import React, { Component } from 'react'
import LoginForm from '../../components/Form/LoginForm'
import './style.less'
import { Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

@inject('userStore')
@observer
class Login extends Component {
	handleSubmit = () => {
		console.log(this.loginForm)
		this.props.userStore.login()
	}

	render() {
		if (this.props.userStore.currentUser) {
			return <Redirect to="/index" />
		}

		return (
			<div className='container'>
				<div className='content'>
					<LoginForm
						wrappedComponentRef={(form) => {this.loginForm = form}}
					/>
				</div>
			</div>
		)
	}
}

export default Login
