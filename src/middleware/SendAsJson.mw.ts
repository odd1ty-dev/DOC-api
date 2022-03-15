import { Request, Response, NextFunction } from "express";

interface ICustomError extends Error {
    statusCode: number;
};

export interface IMyError {
    code: number,
    status: boolean,
    name: string,
    message: string
}

export default () => (err: ICustomError, req: Request, res: Response, next: NextFunction): Response<IMyError> => {
    console.log(err)
    if (process.env.NODE_ENV === 'production') {
        if (err.statusCode !== 500) {
            return res.status(err.statusCode).json({
                code: err.statusCode,
                status: false,
                name: err.name,
                message: err.message
            })
        } else {
            return res.status(500).json({
                code: 500,
                status: false,
                name: err.name,
                message: 'Server Error'
            });
        }
    } else {
        next(err);
    }
}