import { Response } from "express";

const ResponseUtil = {
    success: (res: Response, code: number, message: string, data: object = {}) => {
        return res.status(200).json({
            status: true,
            code,
            message,
            data
        });
    },
    failed: (res: Response, code: number, message: string, data: object = {}) => {
        return res.status(200).json({
            status: false,
            code,
            message,
            data
        });
    }
};

export default ResponseUtil;