import React from 'react'
import { Icon, Layout, Menu } from 'antd'
import './style.less'

const {Sider} = Layout
const { SubMenu } = Menu;

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
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
					}
					key={item.key}
				>
					{renderMenu(item.children)}
				</SubMenu>
			)
		}
		return <Menu.Item title={item.title} key={item.key} >
			<Icon type={item.icon}/>
			<span>{item.title}</span>
		</Menu.Item>
	})
}

const SiderLeft = (props) => (
	<Sider
		trigger={null}
		collapsible
		collapsed={props.collapsed}
		style={{
			height: '100vh',
			left: 0,
		}}
		className='sider'
	>
		<div className="logo"/>

		<Menu theme="dark" mode="inline">

			{renderMenu(props.menu)}

		</Menu>

	</Sider>
)

export default SiderLeft
