import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyServiceComponent } from './apply-service/apply-service.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'apply-service/:service-type', component: ApplyServiceComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
