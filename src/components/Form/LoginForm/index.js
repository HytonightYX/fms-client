import React from 'react'
import './style.less'
import { Form, Icon, Input, Button, message } from 'antd'
import { inject, observer } from 'mobx-react'

@inject('userStore')
@observer
class LoginForm extends React.Component {
	render() {
		const {getFieldDecorator} = this.props.form
		return (
			<Form onSubmit={this.props.handleSubmit} className="login-form">
				<Form.Item>
					{
						getFieldDecorator('userName', {
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
