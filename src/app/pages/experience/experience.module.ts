import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';
import {SharedModule} from "../../shared/shared.module";
import {MaterialModule} from "@angular/material";
import {EffectsModule} from "@ngrx/effects";
import {ExperienceEffects} from "../../effects/experience.effects";
import {ExperienceService} from "../../services/experience.service";

@NgModule({
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    MaterialModule,
    SharedModule,
    EffectsModule.run(ExperienceEffects)
  ],
  declarations: [ExperienceComponent],
  providers: [ExperienceService]
})
export class ExperienceModule { }
