import express from "express";
import { Constant, Lang } from "interfaces/app.interface";

declare global {
  namespace Express {
    interface Request {
        local: string;
        lang: Lang;
        constant: Constant;
        ResponseHandler: object;
    }
  }
}