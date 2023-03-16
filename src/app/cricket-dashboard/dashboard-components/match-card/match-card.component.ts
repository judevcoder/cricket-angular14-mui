import { Component, Input, OnInit } from '@angular/core';
import { Match } from '../../matches';

@Component({
  selector: 'cricket-match-card',
  templateUrl: './match-card.component.html'
})
export class MatchCardComponent implements OnInit {
  @Input() item!: Match;
  ngOnInit(): void {
  }

}
