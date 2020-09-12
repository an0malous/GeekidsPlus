import axios from 'axios'

const api = {};

api.login = payload => axios.post('/user/login', payload);
api.logout = () => axios.post("user/logout");
api.register = payload => axios.post("/user/register", payload);
api.user = () => axios.get('/user');
api.createCard = payload => axios.post("/admin/cards/add", payload);
api.deleteCard = id => axios.delete("/admin/cards/" + id)
api.getCards = () => axios.get("/admin/cards");
api.editCard = (id) => axios.get("/admin/cards/edit/" +  id)
api.updateCard = (id, payload) => axios.post("/admin/cards/edit/" + id, payload)

export default api
