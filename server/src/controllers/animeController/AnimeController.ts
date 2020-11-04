import {Request,Response} from 'express';
import {pool} from '../../config/dbConfig';
import {v4 as uuidv4} from 'uuid';

export class AnimeController{

    async createAnime(req:Request,res:Response){
        let {name,first_emision,season,studio,rate,cover}=req.body;
        let newAnime={
            id: uuidv4(),
            name,
            first_emision,
            season,
            studio,
            rate,
            cover
        };
        await pool.query('INSERT INTO general_info set ?', [newAnime],(error,result)=>{
            if(!error) res.json({text:`New anime succesfully added`});
            else res.status(500).json({text:`Ups something went wrong :C ${error} and you send ${req.body}`});
        });  
    }

    async readAnime(req:Request,res:Response){
        await pool.query('SELECT * FROM general_info',(error,result)=>{
            if(result.length>0)res.json(result);
            else if (error) res.status(500).json({text:`Ups something went wrong ERROR ${error}`});
            else res.json({text:'Your list is empty'});
        });
    }

    async updateAnime(req:Request,res:Response){
        const {id}=req.params;
        await pool.query('UPDATE general_info set ? where id=?',[req.body,id],(error,result)=>{
            if(!error)res.json({text: `anime with id:${id} was updated`});
            else res.status(500).json({text:`Ups something went wrong ERROR ${error}`})
        });
        
    }

    async deleteAnime(req:Request,res:Response){
        const {id}=req.params;
        await pool.query('DELETE FROM general_info where id=?',[id],(error,result)=>{
            if(!error)res.json({text:`anime with id:${id} was deleted`});
            else res.status(500).json({text:`Ups something went wrong ERROR ${error}`})
        });
    }

    async getOne(req:Request,res:Response){
        const {id}=req.params;
        await pool.query('SELECT * FROM general_info where id = ?',[id],(error,result)=>{
            if(result.length>0)res.json(result);
            else if(error) res.status(500).json({text:`Ups someting went wrong ERROR`});
            else{ res.status(404).json(`Anime with id:${id} does not exists on this database`)}
        });
    }
}
