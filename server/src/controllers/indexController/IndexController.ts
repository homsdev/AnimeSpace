import {Request,Response} from 'express';

export class IndexController{


    index(req:Request,res:Response){
        res.json({text:"This is the main page :)"});
    }

}


