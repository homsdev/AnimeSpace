import {database} from './config';
import {promisify} from 'util';
import mysql from 'mysql';

export const pool=mysql.createPool(database);

pool.getConnection((err,connection)=>{
    if(err){
        switch (err.code){
            case 'PROTOCOL_CONNECTION_LOST':
                console.log(`Database connection was closed ${err.code}`);
                break;
            case 'ER_CON_COUNT_ERROR':
                console.log(`Database has too many connections ${err.code}`);
                break;
            case 'ECONNREFUSED':
                console.log(`Database connection was refused ${err.code}`);
                break;
            default:
                console.log(`Connection error: ${err.code}`);
        }
    }else if(connection){
        pool.releaseConnection(connection);
        console.log(`Database has been succesfully connected`);
    }
});
