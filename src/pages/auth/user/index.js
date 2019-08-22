import React, { Component } from 'react'
import { Button, Card, Table, Tag, Icon, message } from 'antd'
import { inject, observer } from 'mobx-react'
import Actions from './components/Actions'
import EditModal from './components/EditModal'

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

	state = {
		showEditModal: false
	}

	submitEditUser = () => {
		this.editUserForm.props.form.validateFields(async (err, values) => {
			if (!err) {
				this.props.userStore.register(values)
					.then(() => {
						this.setState({showEditModal: false})
					})
					.catch(e => {})
			}
		});
	}

	loadForm = (form) => {
		this.editUserForm = form
	}

	componentDidMount() {
		this.props.userStore.loadAllUsers()
			.catch(e => {
				console.log(e)
			})
	}

	render() {
		return (
			<div className='table-with-filter-warp'>
				<Card>
					<Button
						type="primary"
						onClick={() => {this.setState({showEditModal: true})}}
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
				<EditModal
					visible={this.state.showEditModal}
					onCancel={() => {
						this.setState({showEditModal: false})
					}}
					submitEditUser={this.submitEditUser}
					loadForm={this.loadForm}
				/>
			</div>
		)
	}
}

export default AuthUser
