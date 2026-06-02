const AppError = require('./error-handler');
const {StatusCodes} = require('http-status-codes');

class ClientError extends AppError{
    constructor(name, message, statusCode = StatusCodes.BAD_REQUEST, explaination = 'Client error'){
        if (typeof name === 'object' && name !== null) {
            const error = name;
            super(
                error.name || 'ClientError',
                error.message || 'Client error',
                error.statusCode || StatusCodes.BAD_REQUEST,
                error.explaination || error.explanation || 'Client error'
            );
            return;
        }

        super(
            name,
            message,
            statusCode,
            explaination
        );
    }
}

module.exports = ClientError;