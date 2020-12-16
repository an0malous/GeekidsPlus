import React from 'react';
import api from '../../api';
import { Redirect } from 'react-router-dom';
import { getCurrentUser } from '../../actions/userActions';
import { connect } from 'react-redux';
import useInput from '../../custom-hooks/use-Input';
import { useHistory } from 'react-router'
const Login = ({ getCurrentUser }) => { 
    let history = useHistory();

    const { inputs, handleInputChange, handleSubmit } = useInput(
        async event =>{
          
            
            if(inputs.username && inputs.password) {
                
                try {
                    const payload = {username: inputs.username, password: inputs.password} ;
                    const response = await api.login(payload);
                    const { username, role } = response.data;
                    
                      if(username, role){
                        getCurrentUser({ loggedIn: true, username, role })
                        history.goBack();
                    } else {
                console.log("No username or password")
                }
            }catch(err){
                console.log(err)
              }
            } else {console.log("No username or password")} 
        }
    );
    
    

        return (
          
            <div className="ui container aligned center">
                <form className="ui form">
                    <div className="field">
                        <label>Username</label>
                        <input onChange={handleInputChange} type="text" name="username" value={inputs.username} placeholder="username" />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input onChange={handleInputChange} type="password" value={inputs.password} name="password" placeholder="password" />
                    </div>
                    <button className="ui button" type="submit" onClick={handleSubmit}>Login</button>
               </form>
            </div>
            )   
};


const mapDispatchToProps = dispatch => ({
    getCurrentUser: (user) => dispatch(getCurrentUser(user))
  });
  
  export default connect(null, mapDispatchToProps)(Login);
