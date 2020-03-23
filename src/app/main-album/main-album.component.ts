import { Component, OnInit } from '@angular/core';
import { DalService } from '../dal.service';
import { Album } from '../album';

@Component({
  selector: 'app-main-album',
  templateUrl: './main-album.component.html',
  styleUrls: ['./main-album.component.css']
})
export class MainAlbumComponent implements OnInit {

  constructor(private Dal:DalService) { }
  albumsData:Album[];

  ngOnInit(): void {
    this.Dal.get().subscribe(data => this.albumsData = data);
  }

}
