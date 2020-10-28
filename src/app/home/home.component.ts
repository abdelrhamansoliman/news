import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService  } from '../news.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

newsContainer:any[];
  constructor(_NewsService:NewsService) {

    _NewsService.getNews().subscribe(data => {
  
      this.newsContainer = data.articles;
    })
   }

  ngOnInit() {
  }

}
