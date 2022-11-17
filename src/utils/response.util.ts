import { Response } from "express";

const ResponseUtil = {
    send: (res: Response, status: boolean, code: number, message: string, data: object) => {
        return res.status(code).json({
            status,
            code,
            message,
            data
        });
    }
};

export default ResponseUtil;