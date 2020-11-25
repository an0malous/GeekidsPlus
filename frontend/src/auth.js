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
          const { username, role } = response.data;
        if(username, role){
          console.log(response.data)
          getCurrentUser({ loggedIn: true, username: username, role: role})
      }
      }
    } catch (error) {
      console.log(error);
    }
  };

  async logout(callback) {
      const response = await api.logout();
      console.log(response)
      if(callback){
        callback();
      }
    this.authenticated = false;
  }

  isAuthenticated (callback) {
      if(callback){
            api.user().then((response)=>{
                if(response.status === 200){
                    console.log(response.data);
                    
                }
            }).catch((err)=>{
                console.log(err)
            })  
        } else {
    return this.authenticated;
        }
  }
}


export default new Auth(getCurrentUser)


//   handleLogout() {
//     if (!this.state.loggedIn) {
//       return (window.location = "/login");
//     } else {
//       axios.post("http://localhost:3000/user/logout").then(() => {
//         console.log("log out complete");
//         window.location = "/";
//       });
//     }
//   }
// }
