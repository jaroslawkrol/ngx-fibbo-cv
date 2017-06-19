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

import * as education from '../actions/education.actions';
import {EducationService} from "../services/education.service";

@Injectable()
export class EducationEffects {

  @Effect()
  getEducationRecords$: Observable<Action> = this.actions$
    .ofType(education.EDU_LOAD)
    .startWith(new education.LoadAction())
    .switchMap(() => {
      return this.educationService.getRecords()
        .map(records => new education.LoadSuccessAction(records))
        .catch(() => of(new education.LoadSuccessAction([])));
    });

  constructor(private actions$: Actions, private educationService: EducationService) {

  }
}
