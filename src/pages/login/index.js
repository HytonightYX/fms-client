import React, { Component } from 'react'
import LoginForm from '../../components/Form/LoginForm'
import './style.less'
import { Redirect } from 'react-router-dom'

class Login extends Component {
	state = {
		login: false
	}

	handleSubmit = () => {
		this.setState({
			login: true
		})
	}

	render() {

		if (this.state.login) {
			return <Redirect to="/index" />
		}

		return (
			<div className='container'>
				<div className='content'>
					<LoginForm
						wrappedComponentRef={(form) => {this.loginForm = form}}
						onSubmit={this.submit}
						handleSubmit={this.handleSubmit}
					/>
				</div>
			</div>
		)
	}
}

export default Login
