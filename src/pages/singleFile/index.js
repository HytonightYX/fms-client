import React, { Component } from 'react'
import { Card, Button, Table, Tag, Popover, Icon, message } from 'antd'
import FilterForm from '../../components/Form/FilterForm'
import OrganizationTreeDrawer from '../../components/Drawer'
import AddModal from './components/AddModal'
import './style.less'
import { inject, observer } from 'mobx-react'
import {toJS} from 'mobx'

@inject('singleFileStore')
@observer
class SingleFile extends Component {
	state = {
		selectedRowKeys: [],
		loading: false,

		showAddFile: false,
		showDrawer: true,
		showSearch: false
	}

	componentDidMount() {
		this.props.singleFileStore.loadAllSingleFiles()
			.then(() => {
				console.log(toJS(this.props.singleFileStore))
				this.setState({loading: true})
			})
			.catch(e => console.log(e))
	}

	onSelectChange = selectedRowKeys => {
		console.log('selectedRowKeys changed: ', selectedRowKeys)
		this.setState({selectedRowKeys})
	}

	/**
	 * 添加档案弹框
	 */
	handleAddFile = () => {
		this.setState({
			showAddFile: true
		})
	}

	/**
	 * 提交添加档案请求
	 */
	submitAddFile = () => {
		// TODO 提交请求
		const fileData = console.log(this.addFileFormData.props.form.getFieldsValue())
		alert('提交成功')
	}

	showOrganizationTreeDrawer = () => {
		this.setState({
			showDrawer: !this.state.showDrawer
		})
	}

	handleCloseDrawer = () => {
		this.setState({
			showDrawer: !this.state.showDrawer
		})
	}

	lendIt = (selected) => {
		console.log('selected', selected)
		if (selected.length > 0) {
			console.log('send', selected)
			// TODO: 传入用户ID
			this.props.singleFileStore.lendAll(selected, 1)
				.then(() => {
					this.props.singleFileStore.loadAllSingleFiles()
				})
				.catch(e => {console.log(e)})
				.finally(() => this.setState({selectedRowKeys: []}))
		} else {
			message.info('您尚未选择要借阅的文件', 0.7)
		}
	}

	loadForm = (form) => {
		this.addFileFormData = form
		console.log(form)
	}

	render() {
		const {loading, selectedRowKeys} = this.state
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange,
		}

		const hasSelected = selectedRowKeys.length > 0

		return (
			<div className='table-with-filter-warp'>
				{
					this.state.showSearch ?
						<Card className='card-filter'>
							<FilterForm/>
						</Card>
						:
						null
				}

				<div className="table-warp">
					<Card className='table-op-card'>
						<Button type="primary" onClick={this.showOrganizationTreeDrawer}>选择组织</Button>
						<Button type={'primary'} onClick={this.handleAddFile}>新增</Button>
						<Button type={'primary'} onClick={() => {this.setState({showSearch: !this.state.showSearch})}}>查询</Button>
						<Button type={'danger'}>删除</Button>
						<Button onClick={() => {this.lendIt(this.state.selectedRowKeys)}}>借阅</Button>
					</Card>

					<Table
						size={'small'}
						scroll={{x: 2350, y: 1000}}
						columns={single_file_columns}
						dataSource={this.props.singleFileStore.allSingleFiles}
						rowKey={r => r.id}
						rowSelection={rowSelection}
						pagination={{ pageSize: 12 }}
					/>
				</div>

				<AddModal
					visible={this.state.showAddFile}
					onCancel={() => {
						this.setState({showAddFile: false})
					}}
					onOk={this.submitAddFile}
					loadForm={this.loadForm}
				/>

				<OrganizationTreeDrawer
					title='选择组织分类'
					placement='left'
					visible={this.state.showDrawer}
					onClose={this.handleCloseDrawer}
				/>
			</div>
		)
	}
}

const single_file_columns = [
	{
		title: '文件题名',
		dataIndex: 'title',
		key: 'title',
		fixed: 'left',
		width: 230,
		// render(arr) {
		// 	return arr.map((item) => {
		// 		return item.name
		// 	}).join(',')
		// }
	},
	{
		title: '全宗号',
		dataIndex: 'fondsCode',
		key: 'fondsCode',
		width: 100,
	},
	{
		title: '档号',
		dataIndex: 'archivalCode',
		key: 'archivalCode',
		width: 80,
	},
	{
		title: '件号',
		dataIndex: 'itemNum',
		key: 'itemNum',
		width: 80,
	},
	{
		title: '文件字号',
		dataIndex: 'fileCode',
		key: 'fileCode',
		width: 140,
	},
	{
		title: '责任者',
		dataIndex: 'responsible',
		key: 'responsible',
		width: 100,
	},
	{
		title: '盒号',
		dataIndex: 'boxNum',
		key: 'boxNum',
		width: 80,
	},
	{
		title: '页数',
		dataIndex: 'page',
		key: 'page',
		width: 80,
	},
	{
		title: '保管期限',
		dataIndex: 'time',
		key: 'time',
		width: 100,
	},
	{
		title: '年度',
		dataIndex: 'year',
		key: 'year',
		width: 80,
	},
	{
		title: '备注',
		dataIndex: 'remarks',
		key: 'remarks',
		width: 80,
	},
	{
		title: '主题词',
		dataIndex: 'subjectWords',
		key: 'subjectWords',
		width: 80,
	},
	{
		title: '收发编号',
		dataIndex: 'transCode',
		key: 'transCode',
		width: 100,
	},{
		title: '条码编号',
		dataIndex: 'barCode',
		key: 'barCode',
		width: 100,
	},{
		title: '分类',
		dataIndex: 'classification',
		key: 'classification',
		width: 80,
	},{
		title: '份数',
		dataIndex: 'quantity',
		key: 'quantity',
		width: 80,
	},{
		title: '文件类别',
		dataIndex: 'fileCategory',
		key: 'fileCategory',
		width: 100,
	},
	{
		title: '机构问题',
		dataIndex: 'issue',
		key: 'issue',
		width: 100,
	},
	{
		title: '公文种类',
		dataIndex: 'documentType',
		key: 'documentType',
		width: 100,
	},
	{
		title: '密级',
		dataIndex: 'securityLevel',
		key: 'securityLevel',
		width: 80,
	},
	{
		title: '紧急程度',
		dataIndex: 'emergency',
		key: 'emergency',
		width: 100,
	},{
		title: '借阅状态',
		dataIndex: 'lend',
		key: 'lend',
		width: 100,
		render: lend => (
			<span>
				{lend === 1
					? <Tag color={'blue'}>借出</Tag>
					: <Tag color={'green'}>可借</Tag>}
      </span>
		)
	},

	{
		title: '文件日期',
		dataIndex: 'fileDate',
		key: 'fileDate',
		width: 120,
	},
	{
		title: '操作',
		key: 'operation',
		fixed: 'right',
		width: 50,
		render: () => (
			<div className='single-file-popover'>
				<Popover
					placement="left"
					trigger="hover"
					content={
						<div className='single-file-popover-btns'>
							<Button type="primary" size='small'>修改</Button>
							<Button type="primary" size='small'>附件</Button>
						</div>
					}
				>
					<a>
						<Icon
							type="plus-circle"
							theme="filled"
						/>
					</a>
				</Popover>
			</div>
		),
	},
]



export default SingleFile
