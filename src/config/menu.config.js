const system_menu = [
	{
		title: '总览',
		key: '/index/dashboard',
		icon: 'dashboard'
	},
	{
		title: '档案借阅',
		key: '/index/borrow',
		icon: 'dashboard'
	},
	{
		title: '档案管理',
		key: '/index/file',
		icon: 'profile',

		children: [
			{
				title: '文件档案',
				key: '/index/file/single',
				icon: 'file'
			},
			{
				title: '业务项目档案',
				key: '/index/file/project',
				icon: 'project'
			}
		]
	},
	{
		title: '权限管理',
		key: '/index/auth',
		icon: 'security-scan',

		children: [
			{
				title: '角色管理',
				key: '/index/auth/role',
				icon: 'robot'
			},
			{
				title: '用户管理',
				key: '/index/auth/user',
				icon: 'team'
			}
		]
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
	system_menu,
	user_menu
}
