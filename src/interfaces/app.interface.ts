import { Router } from "express";

export interface Routes {
    path: string;
    router: Router;
}

export interface MongoConnect {
    url: string,
    options: object
}

export interface ResponseObject {
    status: boolean, 
    code: number, 
    message: string, 
    data: object
}