import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EducationRoutingModule} from './education-routing.module';
import {EducationComponent} from './education.component';
import {SharedModule} from '../../shared/shared.module';
import {MaterialModule} from "@angular/material";
import {EffectsModule} from "@ngrx/effects";
import {EducationEffects} from "../../effects/education.effects";
import {EducationService} from "../../services/education.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    EducationRoutingModule,
    EffectsModule.run(EducationEffects)
  ],
  declarations: [EducationComponent],
  providers: [EducationService]
})
export class EducationModule {
}
