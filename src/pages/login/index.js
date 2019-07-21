// import React, { Component } from 'react'
// import { Form, Icon, Input, Button, Checkbox } from 'antd';
//
// import style from './style.less'
//
// const {FormItem} = Form
//
// class NormalLoginForm extends React.Component {
// 	handleSubmit = e => {
// 		e.preventDefault();
// 		this.props.form.validateFields((err, values) => {
// 			if (!err) {
// 				console.log('Received values of form: ', values);
// 			}
// 		});
// 	};
//
// 	render() {
// 		const { getFieldDecorator } = this.props.form;
// 		return (
// 			<Form onSubmit={this.handleSubmit} className={style.loginForm}>
// 				<Form.Item>
// 					{getFieldDecorator('username', {
// 						rules: [{ required: true, message: 'Please input your username!' }],
// 					})(
// 						<Input
// 							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
// 							placeholder="Username"
// 						/>,
// 					)}
// 				</Form.Item>
// 				<Form.Item>
// 					{getFieldDecorator('password', {
// 						rules: [{ required: true, message: 'Please input your Password!' }],
// 					})(
// 						<Input
// 							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
// 							type="password"
// 							placeholder="Password"
// 						/>,
// 					)}
// 				</Form.Item>
// 				<Form.Item>
// 					{getFieldDecorator('remember', {
// 						valuePropName: 'checked',
// 						initialValue: true,
// 					})(<Checkbox>Remember me</Checkbox>)}
// 					<a className="login-form-forgot" href="">
// 						Forgot password
// 					</a>
// 					<Button type="primary" htmlType="submit" className="login-form-button">
// 						Log in
// 					</Button>
// 					Or <a href="">register now!</a>
// 				</Form.Item>
// 			</Form>
// 		);
// 	}
// }
//
// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
//
//
// class Login extends Component {
//
// 	handleSubmit = (e) => {
// 		e.preventDefault();
// 		this.props.form.validateFields((err, values) => {
// 			if (!err) {
// 				console.log('Received values of form: ', values);
// 				const { setAlitaState } = this.props;
// 				if (values.userName === 'admin' && values.password === 'admin') setAlitaState({ funcName: 'admin', stateName: 'auth' });
// 				if (values.userName === 'guest' && values.password === 'guest') setAlitaState({ funcName: 'guest', stateName: 'auth' });
// 			}
// 		});
// 	};
//
// 	render() {
// 		return (
// 			<div className="login">
// 				<div className="login-form" >
// 					<div className="login-logo">
// 						<span>React Admin</span>
// 					</div>
// 					<WrappedNormalLoginForm/>
// 				</div>
// 			</div>
// 		)
// 	}
// }
//
// export default Login;


import {Link} from 'react-router-dom';
import React from 'react';
import './style.less';

const Login = () => {
	return (
		<div className={'container'}>
			<div className={'lang'}>
			</div>
			<div className={'content'}>
				<div className={'top'}>
					<div className={'header'}>
						<Link to="/">
							<img alt="logo" className={'logo'}/>
							<span className={'title'}>Ant Design</span>
						</Link>
					</div>
					<div className={'desc'}>Ant Design 是西湖区最具影响力的 Web 设计规范</div>
				</div>

			</div>
		</div>
	);
};

export default (Login);
