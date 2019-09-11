import React, { Component } from 'react'
import { Card, Button, Table, Tag, Popover, Icon } from 'antd'
import FilterForm from '../../components/Form/FilterForm'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'
import { formatTime } from '../../services/utils'

@inject('lendStore', 'userStore')
@observer
class Lend extends Component {
	state = {
		selectedRowKeys: [],
		loading: false,

		showAddFile: false,
		showDrawer: true,
		showSearch: false
	}

	onSelectChange = selectedRowKeys => {
		console.log('selectedRowKeys changed: ', selectedRowKeys)
		this.setState({selectedRowKeys})
	}

	componentDidMount() {
		this.props.lendStore.loadAllLendsByUserId(1)
			.then(() => {
				console.log(toJS(this.props.lendStore.userLends))
				this.setState({loading: true})
			})
			.catch(e => console.log(e))
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

		return (
			<div className='table-with-filter-warp'>

				<div className="table-warp">
					<Card className='table-op-card'>
						<Button type={'primary'} onClick={() => {
							this.setState({showSearch: !this.state.showSearch})
						}}>查询</Button>
						<Button onClick={() => {
							this.props.lendStore.returnSelected(
								this.state.selectedRowKeys
							).then(() => {
								this.props.lendStore.loadAllLendsByUserId(1)
									.catch(e => console.log(e))
							})
								.catch(e => {
								console.log(e)
							})
						}}>归还</Button>

						{
							this.state.showSearch ?
								<Card className='card-filter'>
									<FilterForm/>
								</Card>
								:
								null
						}

					</Card>

					<Table
						size={'middle'}
						columns={my_lend_columns}
						dataSource={this.props.lendStore.userLends}
						rowKey={r => r.fileId}
						rowSelection={rowSelection}
					/>
				</div>
			</div>
		)
	}
}

const my_lend_columns = [
	{
		title: '文件题名',
		dataIndex: 'title',
		key: 'title',
		// render(arr) {
		// 	return arr.map((item) => {
		// 		return item.name
		// 	}).join(',')
		// }
	},
	{
		title: '文件类型',
		dataIndex: 'fileType',
		key: 'fileType',
		render(type) {
			if (type === 100) {
				return '文件档案'
			} else if (type === 200) {
				return '项目档案'
			}
		}
	},
	{
		title: '全宗号',
		dataIndex: 'fondsCode',
		key: 'fondsCode'
	},
	{
		title: '借阅日期',
		dataIndex: 'createdAt',
		key: 'createdAt',
		render(time) {
			return formatTime(time)
		}
	},
	{
		title: '操作',
		key: 'operation',
		render: () => (
			<div className='single-file-popover-btns'>
				<Button type="primary" size='small'>详情</Button>
				<Button type="primary" size='small'>归还</Button>
			</div>
		),
	},
]

export default Lend
