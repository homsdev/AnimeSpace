import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anime-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  menu:boolean=false;

  ngOnInit(): void {
  }

  menuActive(){
    if(this.menu) this.menu=false;
    else this.menu=true;
  }

}
