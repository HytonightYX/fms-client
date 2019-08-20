import { Form, Icon, Input, Modal, Select } from 'antd'
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import {toJS} from 'mobx'
const { Option } = Select

const EditModal = (props) => (
	<Modal
		title={props.userInfo ? '用户详情' : '新建用户'}
		visible={props.visible}
		onCancel={props.onCancel}
		onOk={props.submitEditUser}
	>
		<EditUserModalForm
			wrappedComponentRef={(data) => {props.loadForm(data)}}
			userInfo={props.userInfo}
		/>
	</Modal>
)

@inject('roleStore')
@observer
class EditUserModalForm extends Component {

	componentDidMount() {
		this.props.roleStore.loadAllRoles()
			.catch(e => {
				console.log(e)
			})
	}

	render() {
		const {getFieldDecorator} = this.props.form
		const formItemLayout = {
			labelCol: {span: 5},
			wrapperCol: {span: 19}
		}

		const roles = this.props.roleStore.allRoles ?
			toJS(this.props.roleStore.allRoles) : []

		return (
			<Form layout='horizontal' onSubmit={this.handleSubmit}>
				<Form.Item label='用户名' {...formItemLayout}>
					{
						getFieldDecorator('userName', {
							rules: [{ required: true, message: '请填写用户名!' }],
						})(
							<Input
								prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
							/>,
						)
					}
				</Form.Item>
				<Form.Item label='角色' {...formItemLayout}>
					{
						getFieldDecorator('roleId', {
							rules: [{ required: true, message: '请选择用户角色!' }],
						})(
							<Select style={{ width: 120 }}>
								{
									roles.map((item, index) => {
										return <Option value={item.id} key={`role-${index}`}>{item.name}</Option>
									})
								}
							</Select>
						)
					}
				</Form.Item>

				<Form.Item label='状态' {...formItemLayout}>
					{
						getFieldDecorator('status', {
							initialValue: '1'
						})(
							<Select style={{ width: 120 }}>
								<Option value='1' key={`status-1`}>启用</Option>
								<Option value='0' key={`status-0`}>停用</Option>
							</Select>
						)
					}
				</Form.Item>

				<Form.Item label='备注' {...formItemLayout}>
					{
						getFieldDecorator('remark', {})(
							<Input
								prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
							/>,
						)
					}
				</Form.Item>
			</Form>
		)
	}
}

EditUserModalForm = Form.create({})(EditUserModalForm)

export default EditModal
