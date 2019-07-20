import React from 'react'
import { Icon, Layout, Menu } from 'antd'
import './style.less'

const {Sider} = Layout
const { SubMenu } = Menu;

const SiderLeft = (props) => (
	<Sider
		trigger={null}
		collapsible
		collapsed={props.collapsed}
		style={{
			height: '100vh',
			left: 0,
		}}
	>
		<div className="logo"/>
		<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
			<Menu.Item key="1">
				<Icon type="dashboard"/>
				<span>总览</span>
			</Menu.Item>
			<SubMenu
				key='2'
				title={
					<span>
          <Icon type="appstore" />
          <span>档案管理</span>
        </span>
				}
			>
				<Menu.Item key="2-1">
					<Icon type="video-camera"/>
					<span>文件档案管理</span>
				</Menu.Item>
				<Menu.Item key="2-2">
					<Icon type="video-camera"/>
					<span>业务项目档案管理</span>
				</Menu.Item>
			</SubMenu>
			<Menu.Item key="3">
				<Icon type="upload"/>
				<span>权限管理</span>
			</Menu.Item>
		</Menu>
	</Sider>
)

export default SiderLeft
