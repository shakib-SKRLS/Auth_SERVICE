const {User, Role} = require('../models/index');
const validationError = require('../utils/validation-error');
const ClientError = require('../utils/client-error');
const { StatusCodes } = require('http-status-codes');

class UserRepository{
    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            if(error.name == "SequelizeValidationError"){
                let validationErr = new validationError(error);
                throw validationErr;
            }
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    async destroy(userId){
        try {
            await User.destroy({where: {id: userId}});
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    async getById(userId){
        try {
            const user = await User.findByPk(userId, {
                attributes: ['id', 'email']
            });
            return user;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    async getByEmail(userEmail){
        try {
            const user = await User.findOne({where: {email: userEmail}});
            if(!user){
               throw new ClientError(
                "AttributeNotFound",
                "Invalid email is sent in the request", 
                StatusCodes.NOT_FOUND,
                "No user exists with the given email", 
                );
            }
            return user;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    async isAdmin(userId){
        try {
            const user = await User.findByPk(userId);
            const roles = await Role.findOne({
                where: {
                    name: 'Admin'
                },
            });
       
            return user.hasRole(roles);
        }catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
        
    }
    
}

module.exports = UserRepository;