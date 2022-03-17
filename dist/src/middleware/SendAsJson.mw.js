"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
exports.default = () => (err, req, res, next) => {
    console.log(err);
    if (process.env.NODE_ENV === 'production') {
        if (err.statusCode !== 500) {
            return res.status(err.statusCode).json({
                code: err.statusCode,
                status: false,
                name: err.name,
                message: err.message
            });
        }
        else {
            return res.status(500).json({
                code: 500,
                status: false,
                name: err.name,
                message: 'Server Error'
            });
        }
    }
    else {
        next(err);
    }
};
