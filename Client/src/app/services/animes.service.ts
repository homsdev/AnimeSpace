import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

//modelos
import {Anime} from '../models/Anime';
import { Identifiers } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  API_URI:string='https://anime-db-homs.herokuapp.com';
  
  constructor(private http:HttpClient){ }

  createAnime(anime:Anime){
    return this.http.post(`${this.API_URI}/anime`,anime);
  }

  readAnime(){
    return this.http.get(`${this.API_URI}/anime`);
  }

  updateAnime(id:string,anime:Anime){
    return this.http.put(`${this.API_URI}/anime/${id}`,anime)
  }

  deleteAnime(id:string){
    return this.http.delete(`${this.API_URI}/anime/${id}`);
  }

  getOne(id:string){
    return this.http.get(`${this.API_URI}/anime/${id}`);
  }
  


}
