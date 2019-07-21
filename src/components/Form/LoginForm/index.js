import React from 'react'
import './style.less'
import { Form, Icon, Input, Button, message } from 'antd'

class LoginForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('获取到' , values)
				message.success('获取到' + values.username + ' ' + values.password)
			}
		})
	}

	render() {
		const {getFieldDecorator} = this.props.form
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<Form.Item>
					{
						getFieldDecorator('username', {
							initialValue: 'admin',
							rules: [
								{required: true, message: '请输入用户名'},
							],
						})(
							<Input prefix={<Icon type="user"/>} placeholder="username"/>
						)
					}
				</Form.Item>

				<Form.Item>
					{
						getFieldDecorator('password', {
							initialValue: 'admin',
							rules: [{required: true, message: '请输入密码'}],
						})(
							<Input prefix={<Icon type="lock"/>} type="password" placeholder="password"/>
						)
					}
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Log in
					</Button>
				</Form.Item>
			</Form>
		)
	}
}

export default Form.create()(LoginForm)
