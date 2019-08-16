import React, { Component } from 'react'
import { Card, Button, Table, Modal, Form, Input, Icon, Drawer } from 'antd'
import { single_file_columns, single_file_data } from '../../config/table.config'
import FilterForm from '../../components/Form/FilterForm'
import OrganizationTreeDrawer from '../../components/Drawer'
import AddModal from './components/AddModal'
import './style.less'

class SingleFile extends Component {

	state = {
		selectedRowKeys: [],
		loading: false,

		showAddFile: false,
		showDrawer: true,
		showSearch: false
	}

	start = () => {
		this.setState({loading: true})
		// ajax request after empty completing
		setTimeout(() => {
			this.setState({
				selectedRowKeys: [],
				loading: false,
			})
		}, 1000)
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
						<Button type={'danger'}>删除</Button>
						<Button type={'primary'} onClick={() => {this.setState({showSearch: !this.state.showSearch})}}>查询</Button>
					</Card>

					<Table
						size={'middle'}
						scroll={{x: 2450, y: 550}}
						columns={single_file_columns}
						dataSource={single_file_data}
						rowKey={r => r.fondsCode}
						rowSelection={rowSelection}
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
					visible={this.state.showDrawer}
					placement='left'
					onClose={this.handleCloseDrawer}
				/>
			</div>
		)
	}
}



export default SingleFile
