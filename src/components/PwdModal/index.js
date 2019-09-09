import { Form, Icon, Input, Modal } from 'antd'
import React, { Component } from 'react'

const PwdModal = (props) => (
	<Modal
		title='修改密码'
		visible={props.visible}
		onCancel={props.onCancel}
		onOk={props.submitAddFile}
	>
		<SetPwdForm wrappedComponentRef={(data) => {
			props.loadForm(data)
		}}/>
	</Modal>
)

class SetPwdForm extends Component {
	render() {
		const {getFieldDecorator} = this.props.form

		const formItemLayout = {
			labelCol: {span: 5},
			wrapperCol: {span: 19}
		}

		return (
			<Form layout='horizontal' onSubmit={this.handleSubmit}>
				<Form.Item label='原始密码' {...formItemLayout}>
					{
						getFieldDecorator('oldPwd', {})(
							<Input
								prefix={<Icon type="password" style={{color: 'rgba(0,0,0,.25)'}}/>}
							/>,
						)
					}
				</Form.Item>

				<Form.Item label='新密码' {...formItemLayout}>
					{
						getFieldDecorator('newPwd', {})(
							<Input
								prefix={<Icon type="password" style={{color: 'rgba(0,0,0,.25)'}}/>}
							/>,
						)
					}
				</Form.Item>

			</Form>
		)
	}
}

SetPwdForm = Form.create({})(SetPwdForm)

export default PwdModal
