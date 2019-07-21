/**
 * 将配置挂载到全局变量上
 * @param config
 */
export function loadConfigAsGlobal(config) {
	global.config = config
}
