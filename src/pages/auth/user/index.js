import React, { Component } from 'react'
import { Button, Card, Table, Divider, Tag, Icon, Tooltip } from 'antd'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'
import Actions from './components/Actions'

const columns = [
	{
		title: '用户名',
		dataIndex: 'userName',
		key: 'userName',
	},
	{
		title: '角色',
		dataIndex: 'role',
		key: 'role'
	},
	{
		title: '更新时间',
		dataIndex: 'time',
		key: 'time',
	},
	{
		title: '备注',
		dataIndex: 'remark',
		key: 'remark',
	},
	{
		title: '',
		key: 'status',
		dataIndex: 'status',
		render: status => (
			<span>
				{status === 1
					? <Tag color={'green'}>有效</Tag>
					: <Tag color={'red'}>停用</Tag>}
      </span>
		),
	},
	{
		title: '操作',
		key: 'action',
		render: (record) => (
			<Actions record={record}/>
		),
	},
]

@inject('userStore')
@observer
class AuthUser extends Component {

	componentDidMount() {
		this.props.userStore.loadAllUsers()
			.catch(e => {
				console.log(e)
			})
	}

	render() {
		console.log(toJS(this.props.userStore.allUsers))
		return (
			<div className='table-with-filter-warp'>
				<Card>
					<Button
						type="primary"
						onClick={() => {console.log('click')}}
					>
						<Icon type={'plus'}/>新建
					</Button>
				</Card>

				<div className="table-warp">
					<Table
						size={'middle'}
						columns={columns}
						dataSource={this.props.userStore.allUsers}
					/>
				</div>
			</div>
		)
	}
}

export default AuthUser
