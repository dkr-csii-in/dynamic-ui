import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from '../common/shared.module';
import { ApplyServiceComponent } from './apply-service/apply-service.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivateHomeComponent } from './home/private-home.component';
import { PrivateMenuComponent } from './private-menu/private-menu.component';
import { PrivateRoutingModule } from './private-routing.module';

@NgModule({
  declarations: [
    PrivateHomeComponent,
    DashboardComponent,
    PrivateMenuComponent,
    ApplyServiceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutingModule,
    MatMenuModule
  ]
})
export class PrivateModule { }
