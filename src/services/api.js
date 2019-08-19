import axios from 'axios'
import url from '../config'

const ver = '/v1'

export async function queryAllUsers() {
	const res = await axios.get(
		// url + ver + '/user'
		'http://localhost:3035/v1/user'
	)
	return res.data
}
