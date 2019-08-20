import axios from 'axios'
import config from '../config/index'
const url_v1 = config.url + '/v1'

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
