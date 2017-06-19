import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import {SharedModule} from "../../shared/shared.module";
import {MaterialModule} from "@angular/material";
import {SkillsService} from "../../services/skills.service";
import {EffectsModule} from "@ngrx/effects";
import {SkillsEffects} from "../../effects/skills.effects";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    SkillsRoutingModule,
    EffectsModule.run(SkillsEffects)
  ],
  declarations: [SkillsComponent],
  providers: [SkillsService]
})
export class SkillsModule { }
