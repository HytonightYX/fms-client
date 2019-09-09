import axios from 'axios'
import config from '../config/index'
import {message} from 'antd'
const url_v1 = config.url + '/v1'

/* =================== axios interceptors =================== */
const axiosInstance = axios.create({
	baseURL: url_v1
})

axiosInstance.interceptors.response.use(
	response => successHandler(response),
	error => errorHandler(error)
)

const successHandler = (response) => {
	console.log('successHandler', response)
	const msg = response.data.message
	message.success(Array.isArray(msg) ? msg[0] : msg, 0.7)
	return response
}

const errorHandler = (error) => {
	console.log('errorHandler', error)
	const msg = error.response.data.message
	message.error(Array.isArray(msg) ? msg[0] : msg, 0.7)
	return Promise.reject({ ...error })
}


/* =================== users =================== */
export async function queryLogin(userName, password) {
	const r = await axiosInstance.post(
		url_v1 + '/user/login',
		{userName, password}
	)
	return r.data.user
}

export async function queryAllUsers() {
	const r = await axios.get(
		// url + ver + '/user'
		url_v1 + '/user'
	)
	return r.data
}

export async function queryDelUserById(id) {
	const r = await axios.delete(
		url_v1 + '/user/' + id,
	)
	return r.data
}

export async function queryActivateUser(id) {
	const r = await axios.patch(
		`${url_v1}/user/${id}/activate`
	)
	return r.data
}

export async function queryDeactivateUser(id) {
	const r = await axios.patch(
		`${url_v1}/user/${id}/deactivate`
	)
	return r.data
}

export async function queryUpdateUser(user) {
	const r = await axios.patch(
		`${url_v1}/user/${user.id}/update`
	)
	return r.data
}

// export async function queryRegisterUser(user) {
// 	const r = await axios.post(
// 		`${url_v1}/user/register`,
// 		user
// 	)
// 	return r.data
//
// }

export async function queryRegisterUser(user) {
	const r = await axiosInstance.post(
		`${url_v1}/user/register`,
		user
	)
	return r.data
}

/* =================== roles =================== */
export async function queryAllRoles() {
	const r = await axios.get(
		url_v1 + '/role'
	)
	return r.data
}


/* =================== single files =================== */
export async function queryAllSingleFiles() {
	const r = await axios.get(
		url_v1 + '/file/single',
	)
	return r.data
}

export async function queryLendAll(ids, lender) {
	const r = await axiosInstance.post(
		url_v1 + '/file/single/lend',
		{ids, lender}
	)
	return r.data
}

/* =================== lend file =================== */
export async function queryAllLendsByUserId(uid) {
	const r = await axios.get(
		url_v1 + '/lend/' + uid,
	)
	return r.data
}


export async function queryReturnSelected(ids) {
	const r = await axiosInstance.post(
		url_v1 + '/lend/return',
		ids
	)

	return r.data
}
