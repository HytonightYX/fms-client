import React from 'react'
import { Icon, Layout, Avatar, Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom'
import './style.less'
import { inject, observer } from 'mobx-react'

const {Header} = Layout

@inject('userStore')
@observer
class FmsHeader extends React.Component {
	UserMenu = (
		<Menu>
			<Menu.Item>
				<Link to='/user'>
					个人中心
				</Link>
			</Menu.Item>
			<Menu.Item>
				<a onClick={this.props.togglePwdModal}>
					修改密码
				</a>
			</Menu.Item>
			<Menu.Item>
				<a onClick={() => this.props.userStore.logout()}>
					退出登录
				</a>
			</Menu.Item>
		</Menu>
	)

	render() {
		return (
			<Header className='header'>
				<span className='header-title'>
					{/*文件档案管理*/}
				</span>

				<span className='user'>
				{this.props.currentUser
					? <span>
							{this.props.currentUser.username}&nbsp;&nbsp;
							<Dropdown overlay={this.UserMenu} className='dropdown'>
								<span>
									<Avatar shape="square" icon="user"/>
									&nbsp;&nbsp;
									<Icon type="caret-down"/>
								</span>
							</Dropdown>
						</span>
					: <Link to={'/'}>登录</Link>
				} &nbsp;&nbsp;
				</span>
			</Header>
		)
	}
}

export default FmsHeader
