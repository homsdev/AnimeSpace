import {IndexRoute} from './index/IndexRoute';
import {AnimeRoutes} from './animeRoutes/AnimeRoute';

const indexRouter= new IndexRoute().router;
const animeRouter=new AnimeRoutes().router; 


export{
    indexRouter,
    animeRouter
}