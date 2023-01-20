import { Router, Request } from "express";

export interface Lang {
    [Key: string]: string
}

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

export interface Constant {
    [Key: string]: any
}
