import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Anime } from 'src/app/models/Anime';

@Component({
  selector: 'app-anime-item',
  templateUrl: './anime-item.component.html',
  styleUrls: ['./anime-item.component.css']
})
export class AnimeItemComponent implements OnInit {

  @Input() anime:Anime;
  @Output() deleteAnime:EventEmitter<Anime>;
  @Output() updateAnime:EventEmitter<Anime>;

  img:string='/assets/icons/NoImage-icon.png';

  constructor() {
    this.deleteAnime=new EventEmitter();
    this.updateAnime=new EventEmitter();
  }

  ngOnInit(): void {
  }

  delete():void{
    this.deleteAnime.emit(this.anime);
  }

  update():void{
    this.updateAnime.emit(this.anime);
  }

  

}
