import axios from 'axios'
export const login = payload =>  axios.post('http://localhost:3000/user/login', payload);
