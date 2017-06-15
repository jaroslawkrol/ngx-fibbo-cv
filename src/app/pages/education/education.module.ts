import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EducationRoutingModule} from './education-routing.module';
import {EducationComponent} from './education.component';
import {SharedModule} from '../../shared/shared.module';
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    EducationRoutingModule
  ],
  declarations: [EducationComponent]
})
export class EducationModule {
}
