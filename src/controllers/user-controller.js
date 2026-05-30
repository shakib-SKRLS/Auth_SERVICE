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

const signIn = async (req, res) => {
    try {
        const token = await userService.signIn(req.body.email, req.body.password);
        res.status(200).json({
            message: "Signed in successfully",
            data: { token },
            sucess: true,
            error: {}
        });
    } catch (error) {
        res.status(401).json({
            message: "Invalid email or password",
            data: [],
            sucess: false,
            error: error
        });
    }
}

module.exports = {
    create, 
    signIn
};