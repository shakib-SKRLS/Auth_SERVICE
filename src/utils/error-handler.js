const {statusCodes} = require('http-status-codes');

class AppError extends Error{
    constructor(
        name= "AppError",
        message= "Something went wrong",
        statusCode=statusCodes.INTERNAL_SERVER_ERROR,
        explaination= "Something went wrong in the application"
    ){
        super();
        this.name = name;
        this.message = message;
        this.statusCode = statusCode;
        this.explaination = explaination;
    }
}

module.exports = AppError;