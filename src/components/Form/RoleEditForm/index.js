// 角色编辑表单
import React from 'react'
import { Form, Input, Select, Tree } from 'antd/lib/index'

import { system_menu } from '../../../config/menu.config'

const {TreeNode} = Tree
const {Option} = Select

class Index extends React.Component {
	onCheck = (checkedKeys) => {
		this.props.pushCheckedPerms(checkedKeys)
	}

	renderTreeNodes = data => (
		data.map(item => {
			if (item.children) {
				return (
					<TreeNode title={item.title} key={item.key} dataRef={item}>
						{this.renderTreeNodes(item.children)}
					</TreeNode>
				)
			}
			return <TreeNode key={item.key} {...item} />
		})
	)

	render() {
		const {getFieldDecorator} = this.props.form
		const formItemLayout = {
			labelCol: {span: 5},
			wrapperCol: {span: 18}
		}

		return (
			<Form layout="horizontal">
				<Form.Item label="角色名称：" {...formItemLayout}>
					{getFieldDecorator('name', {
						initialValue: ''
					})(
						<Input style={{width: 250}}/>
					)}
				</Form.Item>
				<Form.Item label="状态：" {...formItemLayout}>
					{getFieldDecorator('status', {
						initialValue: '1'
					})(
						<Select
							style={{width: 120}}
							placeholder="启用"
						>
							<Option value="1">启用</Option>
							<Option value="0">停用</Option>
						</Select>
					)}
				</Form.Item>

				<Tree
					checkable
					defaultExpandAll={true}
					checkedKeys={this.props.checkedPermList}
					onCheck={this.onCheck}
				>
					{this.renderTreeNodes(system_menu)}
				</Tree>
			</Form>
		)
	}
}

export default Index = Form.create({})(Index)
