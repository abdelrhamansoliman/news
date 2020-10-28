import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
newsSports:any[];

  constructor(public _SportsService: SportsService) { 

    _SportsService.getSports().subscribe( data=>{
      
      this.newsSports=data.articles
    })
    
  }

  ngOnInit() {
  }

}
