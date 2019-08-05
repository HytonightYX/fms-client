import React, { Component } from 'react'
import { Layout } from 'antd'
import { querySiderMenu } from '../services/api'
import FmsHeader from '../components/Header'
import SiderLeft from '../components/SiderLeft'
import FmsFooter from '../components/Footer'
import {nav_menu} from '../config/menu.config'
import './style.less'
import { inject, observer } from 'mobx-react'

const {Content} = Layout

@inject('userStore')
@observer
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

	onCollapse = () => {
		console.log('collapsed');
		this.setState({
			collapsed: !this.state.collapsed,
		})
	};

	render() {
		return (
			<Layout>

				<SiderLeft
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}
					menu={this.state.menu}
					theme='dark'
				/>

				<Layout>

					<FmsHeader
						currentUser={this.props.userStore.currentUser}
					/>

					<Content className='index-content'>
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
