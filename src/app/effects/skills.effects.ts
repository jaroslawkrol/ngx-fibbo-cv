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
import {Effect, Actions} from '@ngrx/effects';

import * as skills from '../actions/skills.actions';
import {SkillsService} from '../services/skills.service';

@Injectable()
export class SkillsEffects {

  @Effect()
  getSkillsGroups$: Observable<Action> = this.actions$
    .ofType(skills.SKILL_LOAD)
    .startWith(new skills.LoadAction())
    .switchMap(() => {
      return this.skillsService.getGroups()
        .map((groups) => new skills.LoadSuccessAction(groups.sort((group1, group2) => {
          return group1.position - group2.position;
        })))
        .catch(() => of(new skills.LoadSuccessAction([])));
    });

  constructor(private actions$: Actions, private skillsService: SkillsService) {

  }
}
