import { Router } from "express";
import HomeController from "../controllers/home.controller";

class HomeRoute {
    public path: string = '/';
    public router: Router = Router();
    private homeController: HomeController = new HomeController();

    constructor() {
        this.initializeGetRoutes();
        this.initializePostRoutes();
        this.initializePutRoutes();
        this.initializePatchRoutes();
        this.initializeDeleteRoutes();
    }

    private initializeGetRoutes() {
        this.router.get(this.path + '', this.homeController.index);
    }

    private initializePostRoutes() {
        // 
    }

    private initializePutRoutes() {
        // 
    }

    private initializePatchRoutes() {
        // 
    }

    private initializeDeleteRoutes() {
        // 
    }
}

export default HomeRoute;