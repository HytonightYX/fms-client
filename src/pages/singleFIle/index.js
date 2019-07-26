import React, { Component } from 'react'
import { Card, Button, Table } from 'antd'
import { single_file_columns, single_file_data } from '../../config/table.config'
import FilterForm from '../../components/Form/FilterForm'

class SingleFile extends Component {

	state = {
		selectedRowKeys: [],
		loading: false,
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
						<Button type={'primary'}>添加档案</Button>
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
			</div>
		)
	}
}

export default SingleFile
