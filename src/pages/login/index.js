import React from 'react'
import LoginForm from '../../components/Form/LoginForm'
import './style.less'

const Login = (props) => {
	return (
		<div className='container'>
			<div className='content'>
				<LoginForm/>
			</div>
		</div>
	)
}

export default Login
