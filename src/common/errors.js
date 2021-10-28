class ExtendableError extends  Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

class BackendError extends ExtendableError {
    constructor(message, code=500, details = {}) {
        super(message);
        this.code = code;
        this.details = details;
    }
}

export {BackendError}
