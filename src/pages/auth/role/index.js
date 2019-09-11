import React, { Component } from 'react'
import {
	Button,
	Card,
	Table,
	Divider,
	Tag,
	Icon,
	Tooltip,
	Modal,
	Form,
	Input,
	message, Transfer,
} from 'antd'
import { formatTime, getTime } from '../../../services/utils'
import RoleEditForm from '../../../components/Form/RoleEditForm'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'

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

@inject('roleStore', 'userStore')
@observer
class AuthRole extends Component {

	state = {
		targetKeys: [],
		selectedItem: [],
		currRecord: null,

		isAddRoleVisible: false,
		isAllocateVisible: false,
		checkedPermList: {}
	}

	columns = [
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
			dataIndex: 'updatedAt',
			key: 'updatedAt',
			render(time) {
				return formatTime(time)
			}
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
				{status
					? <Tag color={'green'}>有效</Tag>
					: <Tag color={'red'}>停用</Tag>}
      </span>
			),
		},
		{
			title: '操作',
			key: 'action',
			render: (text, records, index) => (
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
				<Tooltip title="分配用户">
          <a onClick={() => {
	          this.setState({
		          isAllocateVisible: true,
		          currRecord: records
	          })
	          this.props.roleStore.loadDividedUser(
		          records.id
	          )
		          .then(() => {
			          this.setState({
				          targetKeys: toJS(this.props.roleStore.dividedUser.notRoleUser),
				          selectedItem: toJS(this.props.roleStore.dividedUser.isRoleUser),
			          })
		          })
		          .catch(e => message.error(e))
          }}><Icon type="user"/></a>
        </Tooltip>
      </span>
			),
		},
	]

	componentDidMount() {
		this.props.roleStore.loadAllRoles()
			.catch(e => message.error(e))
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

		message.success(`${formValue.name} 创建成功`)
		this.setState({
			isAddRoleVisible: false
		})
	}

	handleUserSubmit = () => {
		let data = {}
		// data.user_ids = this.state.targetKeys || [];
		// data.role_id = this.state.selectedItem.id;

		console.log('get', data)
	}

	handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
		this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

		console.log('sourceSelectedKeys: ', sourceSelectedKeys);
		console.log('targetSelectedKeys: ', targetSelectedKeys);
	}

	render() {
		return (
			<div className='table-with-filter-warp'>
				<Card>
					<Button type="primary" onClick={this.handleAddRole}>创建角色</Button>
				</Card>

				<div className="table-warp">
					<Table
						columns={this.columns}
						dataSource={this.props.roleStore.allRoles}
						size={'middle'}
						rowKey={r => r.id}
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
						// checkedPermList={this.state.checkedPermList}
						// pushCheckedPerms={(checkedPerm) => {
						// 	this.setState({
						// 		checkedPermList: checkedPerm
						// 	})
						// }}
						// isEdit={false}
					/>
				</Modal>

				<Modal
					title="为角色分配用户"
					visible={this.state.isAllocateVisible}
					width={800}
					onOk={this.handleUserSubmit}
					onCancel={() => {
						this.setState({
							isAllocateVisible: false
						})
					}}>
					<RoleAllocateForm
						wrappedComponentRef={(form) => this.roleAllocateForm = form}
						currRecord={this.state.currRecord}
						// isClosed={this.state.isRoleAllocateClosed}
						targetKeys={this.state.targetKeys}
						selectedItem={this.state.selectedItem}
						allUsers={this.props.userStore.allUsers}
						handleSelectChange={this.handleSelectChange}
					/>
				</Modal>
			</div>
		)
	}
}


class RoleAllocateForm extends React.Component {
	render() {
		const formItemLayout = {
			labelCol: {span: 5},
			wrapperCol: {span: 18}
		}
		const r = this.props.currRecord
		console.log(this.props)
		return (
			<Form layout="horizontal">
				<Form.Item label="角色名称：" {...formItemLayout}>
					<Input disabled maxLength={8} placeholder={r.name}/>
				</Form.Item>
				<Form.Item label="分配用户：" {...formItemLayout}>
					<Transfer
						listStyle={{width: 200,height: 400}}
						dataSource={this.props.allUsers}
						showSearch
						titles={['待选用户', '已选用户']}
						searchPlaceholder='输入用户名'
						targetKeys={this.props.targetKeys}
						onChange={this.props.handleSelectChange}
						render={item => item.userName}
					/>
				</Form.Item>
			</Form>
		)
	}
}

RoleAllocateForm = Form.create({})(RoleAllocateForm)

export default AuthRole
