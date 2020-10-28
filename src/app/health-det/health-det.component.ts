import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HealthService } from "../health.service"

@Component({
  selector: 'app-health-det',
  templateUrl: './health-det.component.html',
  styleUrls: ['./health-det.component.css']
})
export class HealthDetComponent implements OnInit {
  myParams:number;
  healthDetails:any[];

  constructor(private route:ActivatedRoute,public _HealthService:HealthService ) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>this.myParams=params['id']);
    this._HealthService.getHealth().subscribe(data=>{this.healthDetails=data.articles[this.myParams]})
  }

}
