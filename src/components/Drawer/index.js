import React from 'react'
import { Drawer, Tree } from 'antd'

const { TreeNode } = Tree

class OrganizationTree extends React.Component {
	onSelect = (selectedKeys, info) => {
		console.log('selected', selectedKeys, info)
	}

	render() {
		return (
			<Tree showLine defaultExpandedKeys={['0-0']} onSelect={this.onSelect}>
				<TreeNode title="所有组织" key="0-0">
					<TreeNode title="A公司" key="0-0-0">
						<TreeNode title='1部门' key="0-0-0-1" />
						<TreeNode title='2部门' key="0-0-0-2" />
						<TreeNode title='3部门' key="0-0-0-3" />
					</TreeNode>
					<TreeNode title="B公司" key="0-0-1">
						<TreeNode title="1部门" key="0-0-1-0" />
					</TreeNode>
					<TreeNode title="C市政局" key="0-0-2">
						<TreeNode title="1部门" key="0-0-2-0" />
						<TreeNode title="2部门" key="0-0-2-1" />
					</TreeNode>
				</TreeNode>
			</Tree>
		);
	}
}

const OrganizationTreeDrawer = (props) => (
	<Drawer
		title={props.title}
		placement={props.placement}
		onClose={props.onClose}
		visible={props.visible}
		width={200}
		mask={false}
	>
		<OrganizationTree/>
	</Drawer>
)

export default OrganizationTreeDrawer
