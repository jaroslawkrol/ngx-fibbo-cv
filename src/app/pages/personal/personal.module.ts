import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { SharedModule } from "../../shared/shared.module";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    PersonalRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [PersonalComponent]
})
export class PersonalModule { }
