const UserService = require('../services/user-service');

const userService = new UserService();


const create = async (req, res) => {
    try {
        const user = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        res.status(201).json({
            message: "User created successfully",
            data: user,
            sucess: true,
            error: {}
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong in the controller layer",
            data:[],
            sucess: false,
            error: error
        });
    }
}

module.exports = {
    create
};