import { Component, AfterViewInit } from '@angular/core';
import { completes, lives, Match, upcomings } from './matches';

@Component({
	selector: 'app-cricket-dashboard',
	templateUrl: './cricket-dashboard.component.html'
})
export class CricketDashboardComponent implements AfterViewInit {
  lives: Match[];
  completes: Match[];
  upcomings: Match[];

  constructor() {
    this.lives = lives;
    this.completes = completes;
    this.upcomings = upcomings;
  }
	ngAfterViewInit() { }

}
