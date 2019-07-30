const {
	override,
	fixBabelImports,
	addLessLoader,
	addDecoratorsLegacy,
	disableEsLint
} = require('customize-cra')

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
	addLessLoader({
		javascriptEnabled: true,
		// modifyVars: {'@primary-color': '#1DA57A'},
		// modifyVars: {'@primary-color': '#f9c700'},
	}),
	addDecoratorsLegacy(),
	disableEsLint()
)
