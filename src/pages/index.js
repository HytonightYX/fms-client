import React, { Component } from 'react'
import { Layout } from 'antd'
import FmsHeader from '../components/Header'
import SiderLeft from '../components/SiderLeft'
import FmsFooter from '../components/Footer'
import {querySiderMenu} from '../services/api'
import axios from 'axios'
import './style.less'

const {Content} = Layout

/**
 * 根组件, 一般在这里定义路由
 */
class Index extends Component {
	state = {
		collapsed: false,
		menu: []
	}

	// global.config.mookURL +
	componentWillMount() {
		querySiderMenu()
			.then(res => {
				this.setState({menu: res})
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
						Content
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
