import React from 'react'
import { Icon, Layout, Avatar, Dropdown, Menu } from 'antd'
// import UserMenu from './UserMenu'
import './style.less'

const {Header} = Layout

const FmsHeader = (props) => (
	<Header className='header'>
		<Icon
			className='trigger'
			type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
			onClick={props.toggle}
		/>

		<span className='user'>
			您好,Admin &nbsp;&nbsp;
			<Dropdown overlay={UserMenu} className='dropdown'>
				<span>
					<Avatar shape="square" icon="user"/>
					&nbsp;&nbsp;
					<Icon type="caret-down" />
				</span>
			</Dropdown>
		</span>
	</Header>
)

const UserMenu = (
	<Menu>
		<Menu.Item>
			<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
				1st menu item
			</a>
		</Menu.Item>
		<Menu.Item>
			<a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
				2nd menu item
			</a>
		</Menu.Item>
		<Menu.Item>
			<a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
				3rd menu item
			</a>
		</Menu.Item>
	</Menu>
)

export default FmsHeader
