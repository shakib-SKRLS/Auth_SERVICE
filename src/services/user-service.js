const UserRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config/serverConfig');
class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }
    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    async destroy(userId){
        try {
            const result = await this.userRepository.destroy(userId);
            return result;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    createToken(user){
        try {
          const result = jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
          return result;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    verifyToken(token){
        try {
            const result = jwt.verify(token, JWT_SECRET);
            return result;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    
}

module.exports = UserService;