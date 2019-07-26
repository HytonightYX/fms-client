const single_file_columns = [
	{
		title: '文件题名',
		dataIndex: 'title',
		key: 'title',
		fixed: 'left',
		width: 230,
		// render(arr) {
		// 	return arr.map((item) => {
		// 		return item.name
		// 	}).join(',')
		// }
	},
	{
		title: '全宗号',
		dataIndex: 'fondsCode',
		key: 'fondsCode',
		width: 100,
	},
	{
		title: '档号',
		dataIndex: 'archivalCode',
		key: 'archivalCode',
		width: 80,
	},
	{
		title: '件号',
		dataIndex: 'itemNum',
		key: 'itemNum',
		width: 80,
	},
	{
		title: '文件字号',
		dataIndex: 'fileCode',
		key: 'fileCode',
		width: 100,
	},
	{
		title: '责任者',
		dataIndex: 'responsible',
		key: 'responsible',
		width: 100,
	},
	{
		title: '盒号',
		dataIndex: 'boxNum',
		key: 'boxNum',
		width: 80,
	},
	{
		title: '件号',
		dataIndex: 'itemNum',
		key: 'itemNum',
		width: 80,
	},
	{
		title: '页数',
		dataIndex: 'page',
		key: 'page',
		width: 80,
	},
	{
		title: '保管期限',
		dataIndex: 'time',
		key: 'time',
		width: 100,
	},
	{
		title: '年度',
		dataIndex: 'year',
		key: 'year',
		width: 80,
	},
	{
		title: '备注',
		dataIndex: 'remarks',
		key: 'remarks',
		width: 80,
	},
	{
		title: '主题词',
		dataIndex: 'subjectWords',
		key: 'subjectWords',
		width: 80,
	},
	{
		title: '收发编号',
		dataIndex: 'transCode',
		key: 'transCode',
		width: 100,
	},{
		title: '条码编号',
		dataIndex: 'barCode',
		key: 'barCode',
		width: 100,
	},{
		title: '分类',
		dataIndex: 'classification',
		key: 'classification',
		width: 80,
	},{
		title: '份数',
		dataIndex: 'quantity',
		key: 'quantity',
		width: 80,
	},{
		title: '文件类别',
		dataIndex: 'fileCategory',
		key: 'fileCategory',
		width: 100,
	},
	{
		title: '备注',
		dataIndex: 'remarks',
		key: 'remarks',
		width: 80,
	},
	{
		title: '机构问题',
		dataIndex: 'issue',
		key: 'issue',
		width: 100,
	},
	{
		title: '公文种类',
		dataIndex: 'documentType',
		key: 'documentType',
		width: 100,
	},
	{
		title: '密级',
		dataIndex: 'securityLevel',
		key: 'securityLevel',
		width: 80,
	},
	{
		title: '紧急程度',
		dataIndex: 'emergency',
		key: 'emergency',
		width: 100,
	},{
		title: '借阅状态',
		dataIndex: 'lend',
		key: 'lend',
		width: 100,
	},

	{
		title: '文件日期',
		dataIndex: 'fileDate',
		key: 'fileDate',
		width: 150,
	},
	{
		title: '',
		key: 'operation',
		fixed: 'right',
		width: 30,
		render: () => '•••',
	},
]

const single_file_data = [
	{
		fondsCode: '0010',
		title: '关于西湖区湖底公园建设方案',
		fileDate: '2019-10-10'
	},
	{
		fondsCode: '0011',
		title: '西湖区湖底公园整改方案',
		fileDate: '2019-10-20'
	},
	{
		fondsCode: '4324',
		title: '西湖区湖底公园整改方案',
		fileDate: '2019-10-20'
	},{
		fondsCode: '1234',
		title: '西湖区湖底公园整改方案',
		fileDate: '2019-10-20'
	},{
		fondsCode: '3876',
		title: '西湖区湖底公园整改方案',
		fileDate: '2019-10-20'
	},{
		fondsCode: '3676',
		title: '西湖区湖底公园整改方案',
		fileDate: '2019-10-20'
	},
	{
		fondsCode: '3423',
		title: '西湖区湖底公园整改方案',
		fileDate: '2019-10-20'
	},
	{
		fondsCode: '3643',
		title: '西湖区湖底公园整改方案',
		fileDate: '2019-10-20'
	},
	{
		fondsCode: '4236',
		title: '西湖区湖底公园整改方案',
		fileDate: '2019-10-20'
	},
	{
		fondsCode: '2432',
		title: '西湖区湖底公园整改方案',
		fileDate: '2019-10-20'
	},
	{
		fondsCode: '3615',
		title: '西湖区湖底公园整改方案',
		fileDate: '2019-10-20'
	},{
		fondsCode: '3641',
		title: '西湖区湖底公园整改方案',
		fileDate: '2019-10-20'
	},
	{
		fondsCode: '3089',
		title: '西湖区湖底公园整改方案',
		fileDate: '2019-10-20'
	},
]

export {
	single_file_columns,
	single_file_data
}
