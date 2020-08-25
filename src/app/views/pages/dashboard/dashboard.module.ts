import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedAppModule } from '../../../shared/shared.module';
import { CfsShowComponent } from './cfs-show/cfs-show.component';

@NgModule({
  declarations: [DashboardComponent, CfsShowComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedAppModule
  ]
})
export class DashboardModule {
}
