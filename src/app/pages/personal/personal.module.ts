import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { SharedModule } from "../../shared/shared.module";
import {MaterialModule} from "@angular/material";
import {EffectsModule} from "@ngrx/effects";
import {PersonalEffects} from "../../effects/personal.effects";
import {PersonalService} from "../../services/personal.service";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";

@NgModule({
  imports: [
    CommonModule,
    PersonalRoutingModule,
    MaterialModule,
    SharedModule,
    PerfectScrollbarModule.forChild(),
    EffectsModule.run(PersonalEffects)
  ],
  declarations: [PersonalComponent],
  providers: [PersonalService]
})
export class PersonalModule { }
