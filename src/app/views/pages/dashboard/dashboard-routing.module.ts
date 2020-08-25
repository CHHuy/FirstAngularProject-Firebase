import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CfsShowComponent } from './cfs-show/cfs-show.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { title: 'app.asideMenu.dashboard' }
  },
  { path: 'cfs-show', component: CfsShowComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
