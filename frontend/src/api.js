import axios from 'axios'

const api = {};

api.login = payload => axios.post('/user/login', payload);
api.logout = () => axios.post("user/logout");
api.register = payload => axios.post("/user/register", payload);
api.user = () => axios.get('/user');

export default api
