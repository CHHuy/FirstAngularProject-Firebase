import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedAppModule } from '../../../shared/shared.module';
import { CfsShowComponent } from './cfs-show/cfs-show.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DashboardComponent, CfsShowComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedAppModule,
    NgbCollapseModule
  ]
})
export class DashboardModule {
}
