import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CricketDashboardComponent } from './cricket-dashboard.component';
import { CricketDashboardRoutes } from './cricket-dashboard.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatchCardComponent } from './dashboard-components/match-card/match-card.component';
import { DemoMaterialModule } from '../demo-material-module';


@NgModule({
  declarations: [CricketDashboardComponent, MatchCardComponent],
  imports: [
    DemoMaterialModule,
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(CricketDashboardRoutes)
  ]
})
export class CricketDashboardModule { }
