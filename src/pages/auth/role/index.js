import React, { Component } from 'react'
import { Button, Card, Table, Divider, Tag, Icon, Tooltip } from 'antd'
import {getTime} from '../../../services/utils'

const columns = [
	{
		title: '角色名称',
		dataIndex: 'name',
		key: 'name',
		// render: text => <a href="javascript:;">{text}</a>,
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
				<Tooltip title="停用">
          <a><Icon type="stop"/></a>
        </Tooltip>
				<Divider type="vertical"/>
				<Tooltip title="删除">
          <a><Icon type="delete"/></a>
        </Tooltip>
				<Divider type="vertical"/>
				<Tooltip title="设置用户">
          <a><Icon type="user" /></a>
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
		valid: true
	},
	{
		key: '2',
		name: '录入员',
		code: 'DataEntryStaff',
		time: getTime(true),
		remark: '录入档案信息',
		valid: false
	},
	{
		key: '3',
		name: '普通用户',
		code: 'user',
		time: getTime(true),
		remark: '只能看看,借资料',
		valid: true
	},
]

const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
	},
	getCheckboxProps: record => ({
		disabled: record.name === 'Disabled User', // Column configuration not to be checked
		name: record.name,
	}),
}


class AuthRole extends Component {

	render() {
		return (
			<div className='table-with-filter-warp'>
				<Card>
					<Button type="primary" onClick={this.handleRole}>创建角色</Button>
					{/*<Button type="primary" onClick={this.handlePermission}>设置权限</Button>*/}

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

export default AuthRole
