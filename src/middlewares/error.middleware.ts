import { NextFunction, Request, Response } from "express";
import HttpException from "../exceptions/http.exception";

const errorMiddleware = (err: HttpException, req: Request, res: Response, next: NextFunction) => {
    try {
        const code: number = err.code || 500;
        const message: string = err.message || 'Something went wrong!'
        return res.status(code).json({
            status: false,
            code,
            message,
            data: {}
        });
    } catch(err) {
        next(err);
    }
}

export default errorMiddleware