import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DalService {

  readonly jsonUrl = 'https://gist.githubusercontent.com/jasonbaldridge/2668632/raw/e56320c485a33c339791a25cc107bf70e7f1d763/music.json';
  constructor(private http:HttpClient) {}

  get() : any
  {
    return this.http.get(`${this.jsonUrl}`);
  }

}
