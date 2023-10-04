import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../common/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivateHomeComponent } from './home/private-home.component';
import { PrivateRoutingModule } from './private-routing.module';

@NgModule({
  declarations: [PrivateHomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
