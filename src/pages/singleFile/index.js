import React, { Component } from 'react'
import { Card, Button, Table, Modal, Form, Input, Icon, Drawer } from 'antd'
import { single_file_columns, single_file_data } from '../../config/table.config'
import FilterForm from '../../components/Form/FilterForm'
import OrganizationTreeDrawer from '../../components/Drawer'

class SingleFile extends Component {

	state = {
		selectedRowKeys: [],
		loading: false,

		showAddFile: false,
		showDrawer: true
	};

	start = () => {
		this.setState({ loading: true });
		// ajax request after empty completing
		setTimeout(() => {
			this.setState({
				selectedRowKeys: [],
				loading: false,
			});
		}, 1000);
	};

	onSelectChange = selectedRowKeys => {
		console.log('selectedRowKeys changed: ', selectedRowKeys);
		this.setState({ selectedRowKeys });
	};

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

	render() {
		const { loading, selectedRowKeys } = this.state;
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange,
		};

		const hasSelected = selectedRowKeys.length > 0;

		return (
			<div className='table-with-filter-warp'>
				<Card className='card-filter'>
					<FilterForm/>
				</Card>

				<div className="table-warp">
					<Card className='table-op-card'>
						<Button type="primary" onClick={this.showOrganizationTreeDrawer}>选择组织</Button>
						<Button type={'primary'} onClick={this.handleAddFile}>添加档案</Button>
						<Button >修改档案</Button>
						<Button type={'danger'}>删除档案</Button>
					</Card>

					<Table
						scroll={{ x: 2450, y: 550 }}
						columns={single_file_columns}
						dataSource={single_file_data}
						rowKey={r => r.fondsCode}
						rowSelection={rowSelection}
					/>
				</div>

				<Modal
					title='添加档案'
					visible={this.state.showAddFile}
					onCancel={() => {
						this.setState({showAddFile: false})
					}}
					onOk={this.submitAddFile}
				>
					<AddSingleFileModalForm wrappedComponentRef={(data) => {this.addFileFormData = data}}/>
				</Modal>

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

class AddSingleFileModalForm extends Component {

	render() {
		const {getFieldDecorator} = this.props.form

		const formItemLayout = {
			labelCol: {span: 5},
			wrapperCol: {span: 19}
		}

		return (
			<Form layout='horizontal' onSubmit={this.handleSubmit}>
				<Form.Item label='全宗号' {...formItemLayout}>
					{
						getFieldDecorator('fondsCode', {
						})(
							<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="全宗号"
							/>,
						)
					}
				</Form.Item>

				<Form.Item label='文件标题' {...formItemLayout}>
					{
						getFieldDecorator('title', {
						})(
							<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="文件标题"
							/>,
						)
					}
				</Form.Item>
			</Form>
		)
	}

}

AddSingleFileModalForm = Form.create({})(AddSingleFileModalForm)

export default SingleFile
