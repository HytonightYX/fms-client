import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:8080',
	timeout: 10000,
	params: {} // do not remove this, its added to add params later in the config
});

instance.interceptors.response.use(function (response) {
	console.log('interceptors get: ', response)
	console.log('interceptors get: ')
	return response;
}, function (error) {
	console.log('interceptors catch: ', error)
	return Promise.reject(error);
});

export default instance
