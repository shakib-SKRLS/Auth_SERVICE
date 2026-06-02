const validateUserAuth =  (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    next();
}


const  validateAdminRequest = (req, res, next) => {
    if (!req.body.id) {
        return res.status(400).json({ message: 'User ID is required' });
    }
    next();
}


module.exports = {
    validateUserAuth,
    validateAdminRequest

}