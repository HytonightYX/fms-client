import React, { Component } from 'react'
import { message } from 'antd'
import LoginForm from '../../components/Form/LoginForm'
import './style.less'
import { Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

@inject('userStore')
@observer
class Login extends Component {
	handleSubmit = e => {
		e.preventDefault()
		this.loginForm.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.userStore.login({
					userName: values.userName,
					password: values.password
				})
			}
		})
	}

	render() {
		if (this.props.userStore.currentUser) {
			return <Redirect to="/index"/>
		}

		return (
			<div className='container'>
				<div className='content'>
					<LoginForm
						wrappedComponentRef={(form) => {
							this.loginForm = form
						}}
						handleSubmit={this.handleSubmit}
					/>
				</div>
			</div>
		)
	}
}

export default Login
