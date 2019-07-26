import React, { Component } from 'react'
import { Button, Form, Select, DatePicker } from 'antd'

const {Option} = Select
const { RangePicker } = DatePicker;


/**
 * 顶部查询表单
 */
class BaseFilterForm extends Component {

	handleSubmit = e => {
		e.preventDefault();

		this.props.form.validateFields((err, fieldsValue) => {
			if (err) {
				return;
			}

			console.log('Received values of form: ', fieldsValue);
		});
	};

	handleChange = (value) => {
		console.log(`selected ${value}`)
	}

	render() {
		const {getFieldDecorator} = this.props.form

		const rangeConfig = {
			rules: [{ type: 'array'}],
		};

		return (
			<Form layout={'inline'} onSubmit={this.handleSubmit}>
				<Form.Item label='全宗号'>
					{
						getFieldDecorator('city_id', {
							initialValue: '全部'
						})(
							<Select
								placeholder='全部'
								onChange={this.handleChange}
								style={{width: 100}}
							>
								<Option value="全部">全部</Option>
								<Option value="北京">北京</Option>
								<Option value="天津">天津</Option>
								<Option value="深圳">深圳</Option>
							</Select>
						)
					}
				</Form.Item>

				<Form.Item label='文件日期'>
					{
						getFieldDecorator('model', {
							initialValue: '全部'
						})(
							<Select
								placeholder='全部'
								onChange={this.handleChange}
								style={{width: 100}}
							>
								<Option value="0">全部</Option>
								<Option value="1">模式1</Option>
								<Option value="2">模式2</Option>
							</Select>
						)
					}
				</Form.Item>

				<Form.Item label="文件日期">
					{getFieldDecorator('range-date', rangeConfig)(<RangePicker />)}
				</Form.Item>

				<Form.Item>
					<Button type='primary' className='form-buttons' htmlType="submit" icon='search'>查询</Button>
					<Button>重置</Button>
				</Form.Item>
			</Form>
		)
	}
}

const FilterForm = Form.create({})(BaseFilterForm)

export default FilterForm
