import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';
import {SharedModule} from "../../shared/shared.module";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [ExperienceComponent]
})
export class ExperienceModule { }
