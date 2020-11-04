import {Router} from 'express';

// Controller
import{indexController} from '../../controllers/controllerIndex';

export class IndexRoute{
    router:Router=Router();

    constructor(){
        this.initRoutes();
    }

    initRoutes(){
        this.router.get('/',indexController.index);
    }
}