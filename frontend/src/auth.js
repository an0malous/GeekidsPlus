import api from "./api";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  async login(username, password, callback) {
    try {
      const payload = { username, password };
      const response = await api.login(payload);
      if (response.status === 200) {
        this.authenticated = true;
        callback(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  logout(callback) {
    this.authenticated = false;
    callback();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}
export default new Auth();



//   handleLogout() {
//     if (!this.state.username && !this.state.loggedIn) {
//       return (window.location = "/login");
//     } else {
//       axios.post("http://localhost:3000/user/logout").then(() => {
//         console.log("log out complete");
//         window.location = "/";
//       });
//     }
//   }
// }
