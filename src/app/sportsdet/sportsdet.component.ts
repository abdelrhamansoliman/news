import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsService } from '../sports.service';
@Component({
  selector: 'app-sportsdet',
  templateUrl: './sportsdet.component.html',
  styleUrls: ['./sportsdet.component.css']
})
export class SportsdetComponent implements OnInit {
  Myparam:number;
  sportsDetails:any[];
  constructor( private route:ActivatedRoute,public _SportsService: SportsService ) { 

  }

  ngOnInit() {
    this.route.params.subscribe((params)=>this.Myparam=params['id']);
    this._SportsService.getSports().subscribe(data=>{this.sportsDetails=data.articles[this.Myparam]})
  }

}
