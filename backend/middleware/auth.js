const User = require('../database/models/user');
function authenticated (req, res, next) {
    if(req.isAuthenticated()){
        User.findOne(req.user._id, (err, userInfo)=> {
            console.log("USER INFO :" + userInfo) 
            if(userInfo.role >= 4){
                return next();
            } else {
                console.log("No access")
            }
        })
    }
}

module.exports = authenticated;

