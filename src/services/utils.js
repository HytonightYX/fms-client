import { message } from 'antd'

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

/**
 * 格式化时间
 * @param unFormatTime
 * @returns {*}
 */
export function formatTime(unFormatTime) {
	return unFormatTime
		.replace('T', ' ')
		.replace('.000Z', '')
}

/**
 * 失败时弹窗
 * @param response api call的返回值
 */
export function failureMsg(response) {
	message.error(JSON.stringify(response));
}

/**
 * 成功时弹窗
 * @param msg 展示信息
 * @param duration 弹窗持续时间
 */
export function successMsg(msg='操作成功', duration=1) {
	message.success(msg, duration);
}

