import { templateJitUrl } from '@angular/compiler';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

// Models
import {Anime} from '../../models/Anime';

// Services
import {AnimesService} from '../../services/animes.service'


@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  totalAnimes:number=0;
  animeList:Anime[]=[];
  animeFullList:Anime[]=[];

  start:number=0;
  end:number=5;
  step:number=5;

  loaded:boolean=false;

  constructor(private animeService:AnimesService, private router:Router) { }

  ngOnInit(): void {
    this.readAnime();
    console.log('succesfully Charged');
    this.loaded=true;
  } 

  readAnime(){
    this.animeService.readAnime()
    .subscribe(
      res=> {
        this.animeFullList=this.SwapObjToArr(res);
        this.totalAnimes=this.animeFullList.length;
        this.sliceItemsArray(this.start,this.end);
      },
      err=>console.log(err),
    )
  }

  deleteAnime(anime:Anime):void{
    console.log(`You are deleting ${anime.name}`);
    this.animeService.deleteAnime(anime.id)
    .subscribe(
      res=>{
        console.log(res);
        this.readAnime();
      },
      err=>console.log(err)
    )
  }

  updateAnime(anime:Anime):void{
    console.log(`You are updating ${anime.name} with id:${anime.id}`);
    this.router.navigate(['/anime/edit',anime.id]);
  }

  private SwapObjToArr(obj:Object){
    let arr=[];
    for(let key in obj){
      if(obj.hasOwnProperty(key)){
        arr.push(obj[key]);
      }
    }
    let isEmpty= arr.indexOf('Your list is empty');
    
    if(isEmpty<0) return arr;
    else return null;
  }

  sliceItemsArray(start:number,end:number){
    this.animeList=this.animeFullList.slice(start,end);
  }

  changeStep(e):void{
    this.step=e;
    this.sliceItemsArray(this.start,this.start+this.step);
  }

  changePage(parameter):void{
    this.sliceItemsArray(parameter.start,parameter.end);
    this.start=parameter.start;
    this.end=parameter.end;
  }

  search(parameter:string):void{
    if(parameter!=''){
      let animeSearch=[];
      this.animeFullList.find(anime=>{
        let name=anime.name.toLocaleLowerCase();
        if(name.includes(parameter)) animeSearch.push(anime);
      });
      if(animeSearch.length>0){
        this.animeList=animeSearch;
      }
    }else{
      this.sliceItemsArray(this.start,this.end);
    }

  }

}
