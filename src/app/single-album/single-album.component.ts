import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../song';
@Component({
  selector: 'app-single-album',
  templateUrl: './single-album.component.html',
  styleUrls: ['./single-album.component.css']
})
export class SingleAlbumComponent implements OnInit {

  constructor() { }
  @Input() title:string;
  @Input() description :string;
  @Input() songs:Song[];
  showProp:boolean = false;
  showSongs:boolean = false;
  marked:'marked' | 'regular' = 'regular';
  ngOnInit(): void {
  }

  mark(){
   if(this.marked == 'marked'){
     this.marked = 'regular'
   }
   else{
     this.marked = 'marked'
   }
  }
}
