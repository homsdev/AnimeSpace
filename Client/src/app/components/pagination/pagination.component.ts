import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() totalItems;
  @Output() changeStep:EventEmitter<number>;
  @Output() changePage:EventEmitter<object>;
  @Output() searchAnime:EventEmitter<string>;

  constructor() { 
    this.changeStep= new EventEmitter();
    this.changePage= new EventEmitter();
    this.searchAnime= new EventEmitter(); 
  }

  itemsPage:number=5;
  step:number=5;
  startItems:number=0;
  endItems:number=0;

  ngOnInit(): void {
  this.endItems+=this.itemsPage;
  }

  changeItemsPerPage(e){
    this.step=parseInt(e.target.value);
    this.itemsPage=this.step;
    this.endItems=this.startItems+this.itemsPage;
    this.changeStep.emit(this.step);
  }

  pagePass():void{
    this.startItems=this.endItems;
    this.endItems+=this.itemsPage;
    this.changePage.emit({start:this.startItems,end:this.endItems});   
  }

  pageBack():void{
    this.endItems=this.startItems;
    this.startItems-=this.itemsPage;
    if(this.startItems<0) this.startItems=0;
    this.changePage.emit({start:this.startItems,end:this.endItems});
  }

  searchBox(e):void{
    let animeName=e.target.value;
    this.searchAnime.emit(animeName);
  }

}
