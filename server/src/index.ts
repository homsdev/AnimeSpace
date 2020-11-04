import express,{Application, json} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {options} from './config/config';


//Routes
import {indexRouter,animeRouter} from './routes/routes';

class Server{
    
    app:Application;
    
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port',options.port);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false})); 
    }

    routes():void{
        this.app.use(indexRouter);
        this.app.use('/anime',animeRouter);
    }

    listen():void{
        this.app.listen(options.port,()=>{
            console.log(`Server is listening on ${options.port}`);
        });
    }

}

const server=new Server();

server.listen();

