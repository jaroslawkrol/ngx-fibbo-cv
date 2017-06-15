import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import {SharedModule} from "../../shared/shared.module";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    SkillsRoutingModule
  ],
  declarations: [SkillsComponent]
})
export class SkillsModule { }
