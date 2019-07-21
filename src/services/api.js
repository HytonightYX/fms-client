import axios from 'axios'

export async function querySiderMenu() {
	const res = await axios.get('https://www.easy-mock.com/mock/5d341175763f0068c2361e65/api/query-menu')
	return res.data
}
