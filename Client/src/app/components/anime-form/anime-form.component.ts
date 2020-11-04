import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

// models
import {Anime} from '../../models/Anime';

//services
import {AnimesService} from '../../services/animes.service';

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.css']
})
export class AnimeFormComponent implements OnInit {
  
  today:Date=new Date();
  anime:Anime={
    name:'',
    first_emision: null,
    season:'',
    cover:'',
    rate: null,
    studio:''
  };

  editable:boolean=false;

  constructor(private animeService:AnimesService,private router:Router,private activatedRoute:ActivatedRoute) { 
  }

  ngOnInit(): void {
    const {id}= this.activatedRoute.snapshot.params;
    if(id!=null){
      this.animeService.getOne(id)
      .subscribe(
        res=>{
          this.anime=res[0];
          this.editable=true;
          console.log(this.anime);
        },
        err=>console.log(err)
      );
    }
  }

  createAnime():void{
    delete this.anime.id;
    this.animeService.createAnime(this.anime)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/anime']);
      },
      err=>{console.log(err)}
    )
  }

  updateAnime():void{
    this.animeService.updateAnime(this.anime.id,this.anime).subscribe(
      res=>{
        this.router.navigate(['/anime']);
      },
      err=>console.log(err)
    )
  }

}
