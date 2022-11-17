import ResponseUtil from "../utils/response.util";
import { NextFunction, Request, Response } from "express";

class HomeController {
    public index = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = {
                id: 1,
                name: 'Sk'
            }
            return ResponseUtil.send(res, true, 200, req.body.lang.Success, data);
        } catch(err) {
            next(err);
        }
    }
}

export default HomeController;