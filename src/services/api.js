import axios from 'axios'
import config from '../config/index'
const {url} = config

export async function queryAllUsers() {
	const res = await axios.get(
		// url + ver + '/user'
		url + '/v1/user'
	)
	return res.data
}

export async function queryDelUserById(id) {
	const r = await axios.delete(
		url + '/v1/user/' + id,
	)
	return r.data
}
