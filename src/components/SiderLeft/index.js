import React from 'react'
import { Icon, Layout, Menu } from 'antd'
import {NavLink} from 'react-router-dom'
import './style.less'

const {Sider} = Layout
const {SubMenu} = Menu

/**
 * 递归渲染菜单
 * @param data 请求到的菜单对象
 * @returns {*} 完整菜单
 */
function renderMenu(data) {
	return data.map((item) => {
		if (item.children) {
			return (
				<SubMenu
					title={
						<span>
                <Icon type={item.icon}/>
                <span>{item.title}</span>
              </span>
					}
					key={item.key}
				>
					{renderMenu(item.children)}
				</SubMenu>
			)
		}
		return <Menu.Item title={item.title} key={item.key}>
			<NavLink to={item.key}>
				<Icon type={item.icon}/>
				<span>{item.title}</span>
			</NavLink>
		</Menu.Item>
	})
}

const SiderLeft = (props) => (
	<Sider
		// trigger={null}
		collapsible
		collapsed={props.collapsed}
		onCollapse={props.onCollapse}
		className='sider'
		theme={props.theme || 'dark'}
	>
		<div className="logo"/>

		<Menu theme={props.theme || 'dark'} mode="inline">

			{renderMenu(props.menu)}

		</Menu>

	</Sider>
)

export default SiderLeft
