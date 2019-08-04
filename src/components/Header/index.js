import React from 'react'
import { Icon, Layout, Avatar, Dropdown, Menu } from 'antd'
import './style.less'

const {Header} = Layout

const FmsHeader = (props) => (
	<Header className='header'>
		<span className='header-title'>
			文件档案管理
		</span>

		<span className='user'>
			您好,{props.currentUser
			? () => (
				props.currentUser.username +
				<Dropdown overlay={UserMenu} className='dropdown'>
				<span>
					<Avatar shape="square" icon="user"/>
					&nbsp;&nbsp;
					<Icon type="caret-down" />
				</span>
				</Dropdown>
			)
			: '请先登录'
		} &nbsp;&nbsp;
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
