const nav_menu = [
	{
		title: '总览',
		key: '/index/dashboard',
		icon: 'dashboard'
	},
	{
		title: '档案管理',
		key: '/index/file',
		icon: 'profile',

		children: [
			{
				title: '文件档案',
				key: '/index/file/single'
			},
			{
				title: '业务项目档案',
				key: '/index/file/project'
			}
		]
	},
	{
		title: '权限管理',
		key: '/index/auth',
		icon: 'security-scan'
	}
]

const user_menu = [
	{
		title: '用户设置',
		key: '/user'
	},
	{
		title: '退出登录',
		key: '/logout'
	}
]

export {
	nav_menu,
	user_menu
}
