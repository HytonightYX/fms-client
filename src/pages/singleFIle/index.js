import React, { Component } from 'react'
import { Card, Button, Table } from 'antd'
import { single_file_columns, single_file_data } from '../../config/table.config'
import FilterForm from '../../components/Form/FilterForm'

class SingleFile extends Component {
	render() {
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
					/>
				</div>
			</div>
		)
	}
}

export default SingleFile
