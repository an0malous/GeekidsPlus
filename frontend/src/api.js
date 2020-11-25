import axios from 'axios'

const api = {};

api.login = payload => axios.post('/user/login', payload);
api.logout = () => axios.post("user/logout");
api.register = payload => axios.post("/user/register", payload);
api.user = () => axios.get('/user');
api.createCard = payload => axios.post("/admin/cards/add", payload);
api.deleteCard = id => axios.delete("/admin/cards/" + id)
api.getCards = () => axios.get("/admin/cards");
api.editCard = id => axios.get("/admin/cards/edit/" +  id)
api.updateCard = (id, payload) => axios.post("/admin/cards/edit/" + id, payload);

api.createUser = payload => axios.post('/admin/users/add', payload);
api.editUser = id => axios.get('/admin/users/edit/' + id);
api.updateUser = (id, payload) => axios.post('/admin/users/edit/' + id, payload);
api.getUsers = () =>  axios.get("/admin/users");
export default api
