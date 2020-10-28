import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  constructor(public _HttpClint:HttpClient) { }

  getHealth() : Observable<any>
  {
    return this._HttpClint.get("http://newsapi.org/v2/top-headlines?country=eg&category=health&apiKey=59b3a1358a994bb2880401f7a4231a5c")
  }
}
