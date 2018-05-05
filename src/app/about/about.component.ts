import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  goals: any;
  constructor(private router: Router, private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.goal.subscribe(res => this.goals = res);
  }

  sendHome(){
    this.router.navigate(['']);
  }

}
