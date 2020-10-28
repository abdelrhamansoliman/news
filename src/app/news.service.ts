import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable , Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public _HttpClint:HttpClient) { }


  getNews() : Observable<any>
  {
    return this._HttpClint.get("http://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=59b3a1358a994bb2880401f7a4231a5c")
  }
}
