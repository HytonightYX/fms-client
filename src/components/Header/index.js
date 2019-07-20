import React from 'react'
import { Icon, Layout } from 'antd'
import './style.less'

const {Header} = Layout

const FmsHeader = (props) => (
	<Header style={{background: '#fff', padding: 0}}>
		<Icon
			className='trigger'
			type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
			onClick={props.toggle}
		/>
	</Header>
)

export default FmsHeader
