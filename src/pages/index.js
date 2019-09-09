import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Layout, Modal } from 'antd'
import {system_menu} from '../config/menu.config'
import { Redirect } from 'react-router-dom'
import FmsHeader from '../components/Header'
import SiderLeft from '../components/SiderLeft'
import FmsFooter from '../components/Footer'
import './style.less'
const {Content} = Layout

@inject('userStore')
@observer
class Index extends Component {
	state = {
		collapsed: false,
		menu: system_menu,
		showPwdModal: false
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
	}

	togglePwdModal = () => {
		this.setState({
			showPwdModal: !this.state.showPwdModal
		})
	}


	render() {
		if (!this.props.userStore.currentUser) {
			return <Redirect to={'/login'} />
		}

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
						togglePwdModal={this.togglePwdModal}
						showPwdModal={this.state.showPwdModal}
					/>

					<Content className='index-content'>
						{this.props.children}
					</Content>

					<FmsFooter>
						版权所有: XXXXXXXXXXXXXXXX
					</FmsFooter>

					<Modal>

					</Modal>

				</Layout>

			</Layout>
		)
	}
}

export default Index
