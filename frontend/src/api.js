import axios from 'axios'

const api = {};

api.login = payload => axios.post('http://localhost:3000/user/login', payload);
api.logout = () => axios.post("http://localhost:3000/user/logout");
api.register = payload => axios.post("http://localhost:3000/user/register", payload);
api.user = () => axios.get('http://localhost:3000/user/');

export default api
