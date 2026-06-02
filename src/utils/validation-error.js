const AppError = require('./error-handler');
const {StatusCodes} = require('http-status-codes');

class ValidationError extends AppError{
    constructor(error){
        let errorName = error.name;
        let explaintion=[];
        error.errors.forEach((err)=>{
            explaintion.push(err.message);
        });

        super(
            errorName,
            "Validation error",
            StatusCodes.BAD_REQUEST,
            explaintion
        )
    }
}

module.exports = ValidationError;