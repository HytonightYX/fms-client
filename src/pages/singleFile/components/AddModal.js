import { Form, Icon, Input, Modal } from 'antd'
import React, { Component } from 'react'

const AddModal = (props) => (
	<Modal
		title='添加档案'
		visible={props.visible}
		onCancel={props.onCancel}
		onOk={props.submitAddFile}
	>
		<AddSingleFileModalForm wrappedComponentRef={(data) => {
			props.loadForm(data)
		}}/>
	</Modal>
)

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
						getFieldDecorator('fondsCode', {})(
							<Input
								prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
								placeholder="全宗号"
							/>,
						)
					}
				</Form.Item>

				<Form.Item label='文件标题' {...formItemLayout}>
					{
						getFieldDecorator('title', {})(
							<Input
								prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
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

export default AddModal
