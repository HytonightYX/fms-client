import React, { Component } from 'react'
import { Button, Card, Table, Divider, Tag, Icon, Tooltip } from 'antd'
import {getTime} from '../../../services/utils'

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
		key: 'valid',
		dataIndex: 'valid',
		render: valid => (
			<span>
				{valid
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
				<Tooltip title="删除">
          <a><Icon type="delete"/></a>
        </Tooltip>
      </span>
		),
	},
]

const data = [
	{
		key: '1',
		userName: 'admin',
		role: 'SuperAdmin',
		time: getTime(true),
		remark: '超管啥都能干',
		valid: true
	},
	{
		key: '2',
		userName: '录入员01',
		role: 'DataEntryStaff',
		time: getTime(true),
		remark: '录入档案信息',
		valid: false
	},
	{
		key: '3',
		userName: '录入员02',
		role: 'DataEntryStaff',
		time: getTime(true),
		remark: '录入档案信息',
		valid: true
	},
	{
		key: '4',
		userName: '普通用户01',
		role: 'user',
		time: getTime(true),
		remark: '只能看看,借资料',
		valid: true
	},
	{
		key: '5',
		userName: '普通用户02',
		role: 'user',
		time: getTime(true),
		remark: '只能看看,借资料',
		valid: true
	},
]

class AuthUser extends Component {

	render() {
		return (
			<div className='table-with-filter-warp'>
				<Card>
					<Button type="primary" onClick={this.handleAddUser}><Icon type={'search'}/>搜索用户</Button>
				</Card>

				<div className="table-warp">
					<Table
						columns={columns}
						dataSource={data}
					/>
				</div>
			</div>
		)
	}
}

export default AuthUser
