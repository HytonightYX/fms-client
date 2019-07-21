import React, { Component } from 'react'
import { Layout } from 'antd'
import { querySiderMenu } from '../services/api'
import FmsHeader from '../components/Header'
import SiderLeft from '../components/SiderLeft'
import FmsFooter from '../components/Footer'

import './style.less'

import {nav_menu} from '../config/menu.config'

const {Content} = Layout

/**
 * 根组件, 一般在这里定义路由
 */
class Index extends Component {
	state = {
		collapsed: false,
		menu: nav_menu
	}

	componentWillMount() {
		querySiderMenu()
			.then(res => {
				this.setState({menu: nav_menu})
			})
			.catch(e => {
				console.log(e)
			})
	}

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		})
	}

	render() {
		return (
			<Layout>

				<SiderLeft collapsed={this.state.collapsed} menu={this.state.menu}/>

				<Layout>

					<FmsHeader collapsed={this.state.collapsed} toggle={this.toggle}/>

					<Content className='content'>
						{this.props.children}
					</Content>

					<FmsFooter>
						版权所有: XXXXXXXXXXXXXXXX
					</FmsFooter>

				</Layout>

			</Layout>
		)
	}
}

export default Index
