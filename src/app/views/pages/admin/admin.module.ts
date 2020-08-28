import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedAppModule } from '../../../shared/shared.module';
import { InputSwitchModule } from 'primeng/inputswitch';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedAppModule,
    InputSwitchModule
  ]
})
export class AdminModule { }
