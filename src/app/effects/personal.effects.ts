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

import * as personal from '../actions/personal.actions';
import {PersonalService} from "../services/personal.service";

@Injectable()
export class PersonalEffects {

  @Effect()
  getPersonalRecords$: Observable<Action> = this.actions$
    .ofType(personal.PER_LOAD)
    .startWith(new personal.LoadAction())
    .switchMap(() => {
      return this.personalService.getRecords()
        .map(records => new personal.LoadSuccessAction(records))
        .catch(() => of(new personal.LoadSuccessAction([])));
    });

  constructor(private actions$: Actions, private personalService: PersonalService) {

  }
}
