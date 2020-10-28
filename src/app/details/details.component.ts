import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  myParams:number;
  newsDetails:any[];

  constructor( private route: ActivatedRoute, public _NewsService:NewsService) {
   
   }

  ngOnInit() {
    this.route.params.subscribe((params)=>this.myParams=params['id']);
    this._NewsService.getNews().subscribe(data=>{this.newsDetails=data.articles[this.myParams]})
  }

}
