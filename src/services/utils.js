/**
 * 将配置挂载到全局变量上
 * @param config
 */
export function loadConfigAsGlobal(config) {
	global.config = config
}

/**
 * 获取时间/日期字符串
 * @param onlyDate
 * @returns {string}
 */
export function getTime(onlyDate = false, isNow = true) {
	let now = new Date()
	let year = now.getFullYear()
	let month = now.getMonth() + 1
	let day = now.getDate()

	// yyyy-MM-dd
	if (onlyDate) {

		const date = (
			(year < 10 ? '0' + year : year)
			+ '-' +
			(month < 10 ? '0' + month : month)
			+ '-' +
			(day < 10 ? '0' + day : day)
		)

		return date
	} else {
		return now.toString()
	}
}
