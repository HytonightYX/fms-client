const nav_menu = [
	{
		title: '总览',
		key: '/dashboard',
		icon: 'dashboard'
	},
	{
		title: '档案管理',
		key: '/file',
		icon: 'profile',

		children: [
			{
				title: '文件档案',
				key: '/file/single'
			},
			{
				title: '业务项目档案',
				key: '/file/project'
			}
		]
	},
	{
		title: '权限管理',
		key: '/auth',
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
