import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {SharedModule} from "../../shared/shared.module";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    PerfectScrollbarModule.forChild(),
  ],
  declarations: [DashboardComponent],
  exports: []
})
export class DashboardModule { }
