const UserRepository = require('../repository/user-repository');
const bcrypt = require('bcrypt');
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

    async signIn(email, plainPassword){
        try {
            const user = await this.userRepository.getByEmail(email);
           if(!user){
            throw {message: "User not found"};
           }
           const passwordsMatch = this.checkPassword(plainPassword, user.password);
           if(!passwordsMatch){
            throw {message: "Incorrect password"};
           }
           const newJWT = this.createToken({id: user.id, email: user.email});
           return newJWT;
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

    checkPassword(userInputPlainPassword, encryptedPassword) {
        try {
            const isMatch = bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
            return isMatch;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

}

module.exports = UserService;