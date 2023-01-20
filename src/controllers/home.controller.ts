import ResponseUtil from "../utils/response.util";
import { NextFunction, Request, Response } from "express";

class HomeController {
    public index = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req.lang);
            
            return ResponseUtil.success(res, req.constant.Code.SUCCESS, req.lang.Success);
        } catch(err) {
            next(err);
        }
    }
}

export default HomeController;