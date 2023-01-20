import responseUtil from "../utils/response.util";
import { NextFunction, Request, Response } from "express";
import Config from "../config";
import Constant from "../config/constant";

const appMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        // bind language
        let local = Config.LOCAL;
        req.local = local;
        req.lang = require(`../locals/${local}`);
        // bind constant
        req.constant = Constant;
        // bind response handler
        req.ResponseHandler = responseUtil;
        next();
    } catch(err) {
        next(err);
    }
}

export default appMiddleware;