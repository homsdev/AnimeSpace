import {Router} from 'express';

// Controller
 import {animeController} from '../../controllers/controllerIndex';

export class AnimeRoutes{
    router:Router=Router();

    constructor(){
        this.initRoutes();
    }

    initRoutes():void{
        this.router.get('/',animeController.readAnime);
        this.router.post('/',animeController.createAnime);
        this.router.put('/:id',animeController.updateAnime);
        this.router.delete('/:id',animeController.deleteAnime);
        this.router.get('/:id',animeController.getOne);
    }
}
