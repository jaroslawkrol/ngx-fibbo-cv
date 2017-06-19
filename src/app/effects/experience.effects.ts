import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import {Effect, Actions} from "@ngrx/effects";

import * as experience from '../actions/experience.actions';
import {ExperienceService} from "../services/experience.service";

@Injectable()
export class ExperienceEffects {

  @Effect()
  getExperienceRecords$: Observable<Action> = this.actions$
    .ofType(experience.EXP_LOAD)
    .startWith(new experience.LoadAction())
    .switchMap(() => {
      return this.experienceService.getRecords()
        .map(records => new experience.LoadSuccessAction(records))
        .catch(() => of(new experience.LoadSuccessAction([])));
    });

  constructor(private actions$: Actions, private experienceService: ExperienceService) {

  }
}
