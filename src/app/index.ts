import express, { Application } from "express";
import { Routes } from "../interfaces/app.interface";
import { connect, set } from "mongoose";
import errorMiddleware from "../middlewares/error.middleware";
import appMiddleware from "../middlewares/app.middleware";
import Config from "../config";
import database from "../database";
import HttpException from "../exceptions/http.exception";

class App {
    public app: Application;
    public env: string;
    public port: number | string;

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = Config.NODE_ENV;
        this.port = Config.PORT;

        this.connectDatabase();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeErrorHandlers();
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`NODE_ENV: ${Config.NODE_ENV}`);
            console.log(`App listening on the port ${this.port}`);
        });
    }

    public getApp() {
        return this.app;
    }

    private connectDatabase() {
        if(this.env !== 'prod') {
            set('debug', true);
        }
        connect(database.url, database.options, (err) => {
            if(!err) {
                console.log('DB connected!');
            }
        });
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(appMiddleware);
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => {
            this.app.use(route.path, route.router);
        });
        this.app.use('*', (req, res, next) => {
            try {
                throw new HttpException(404, 'Endpoint not found!');
            } catch(err) {
                next(err);
            }
        });
    }

    private initializeErrorHandlers() {
        this.app.use(errorMiddleware);
    }
}

export default App;