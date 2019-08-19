import React, { Component } from 'react'
import { Button, Card, Table, Divider, Tag, Icon, Tooltip } from 'antd'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'

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

const Actions = inject('userStore')(observer((props) => {
	return (
		<span>
				<Tooltip title="修改">
          <a><Icon type="edit"/></a>
        </Tooltip>
				<Divider type="vertical"/>
				<Tooltip title="删除">
          <a onClick={() => {
          	props.userStore.delUserById(props.record.id)
		          .catch(e => {
		          	console.log(e)
		          })
          }}><Icon type="delete" /></a>
        </Tooltip>
      </span>
	)
}))

@inject('userStore')
@observer
class AuthUser extends Component {

	componentWillMount() {
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
					<Button type="primary" onClick={() => {console.log('click')}}><Icon type={'search'}/>搜索用户</Button>
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
