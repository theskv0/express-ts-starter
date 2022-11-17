import responseUtil from "../utils/response.util";
import { NextFunction, Request, Response } from "express";
import Config from "../config";

const appMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        // bind language
        let local = req.headers.local || Config.LOCAL;
        req.body.local = local;
        req.body.lang = require(`../locals/${local}`);
        // bind response handler
        req.body.ResponseHandler = responseUtil;
        next();
    } catch(err) {
        next(err);
    }
}

export default appMiddleware;