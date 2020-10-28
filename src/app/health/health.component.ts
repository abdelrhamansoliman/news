import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HealthService } from '../health.service';
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  healthNew:any[];

  constructor(_healthService:HealthService) {
   _healthService.getHealth().subscribe(data=> {
     this.healthNew= data.articles;
   })
   }

  ngOnInit() {
  }

}
