import axios from 'axios'

const api = {};

api.login = payload => axios.post('http://localhost:3000/user/login', payload);

export default api
