import React, { Component } from 'react'
import { Button, Card, Table, Divider, Tag, Icon, Tooltip, Modal, Tree, Select, Form, Input, message } from 'antd'
import { getTime } from '../../../services/utils'
import RoleEditForm from '../../../components/Form/RoleEditForm'

const columns = [
	{
		title: '角色名称',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: '角色编码',
		dataIndex: 'code',
		key: 'code',
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
		render: () => (
			<span>
				<Tooltip title="修改">
          <a><Icon type="edit"/></a>
        </Tooltip>
				<Divider type="vertical"/>
				<Tooltip title="停用">
          <a><Icon type="stop"/></a>
        </Tooltip>
				<Divider type="vertical"/>
				<Tooltip title="删除">
          <a><Icon type="delete"/></a>
        </Tooltip>
				<Divider type="vertical"/>
				<Tooltip title="设置用户">
          <a><Icon type="user"/></a>
        </Tooltip>
      </span>
		),
	},
]
const data = [
	{
		key: '1',
		name: '超级管理员',
		code: 'SuperAdmin',
		time: getTime(true),
		remark: '超管啥都能干',
		status: 1
	},
	{
		key: '2',
		name: '录入员',
		code: 'DataEntryStaff',
		time: getTime(true),
		remark: '录入档案信息',
		status: 0
	},
	{
		key: '3',
		name: '普通用户',
		code: 'user',
		time: getTime(true),
		remark: '只能看看,借资料',
		status: 1
	},
]

class AuthRole extends Component {

	state = {
		isAddRoleVisible: false,
		checkedPermList: {}
	}

	handleAddRole = () => {
		this.setState({
			isAddRoleVisible: true,
			checkedPermList: {}
		})
	}

	// 提交更改
	handleAddRoleSubmit = () => {
		const formValue = this.roleEditForm.props.form.getFieldsValue()
		this.roleEditForm.props.form.resetFields()
		const data = {
			name: formValue.name,
			status: formValue.status,
			perm: this.state.checkedPermList
		}

		message.success(`${formValue.name} 创建成功`)
		this.setState({
			isAddRoleVisible: false
		})
	}

	render() {
		return (
			<div className='table-with-filter-warp'>
				<Card>
					<Button type="primary" onClick={this.handleAddRole}>创建角色</Button>
				</Card>

				<div className="table-warp">
					<Table
						columns={columns}
						dataSource={data}
						size={'middle'}
					/>
				</div>

				<Modal
					title='创建角色'
					visible={this.state.isAddRoleVisible}
					width={600}
					onOk={this.handleAddRoleSubmit}
					onCancel={() => {
						this.setState({
							isAddRoleVisible: false
						})
					}}>
					<RoleEditForm
						wrappedComponentRef={(form) => this.roleEditForm = form}
						checkedPermList={this.state.checkedPermList}
						pushCheckedPerms={(checkedPerm) => {
							this.setState({
								checkedPermList: checkedPerm
							})
						}}
						isEdit={false}
					/>
				</Modal>
			</div>
		)
	}
}

export default AuthRole
