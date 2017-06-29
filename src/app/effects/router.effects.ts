import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {Injectable} from '@angular/core';
import {Location} from '@angular/common';

import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';

import * as routerActions from '../actions/router.actions';

const HOMEPAGE_URLS = ['', '/', '/dashboard'];

@Injectable()
export class RouterEffects {

  location: string;

  @Effect()
  checkPage$: Observable<Action> = this.actions$
    .ofType(routerActions.CHECK_CURRENT_PAGE)
    .startWith(new routerActions.CheckCurrentPageAction())
    .switchMap(() => {
      let action: any;
      switch (this.location) {
        case '':
        case '/':
        case '/dashboard':
          action = new routerActions.HomePageAction();
          break;
        case '/education':
          action = new routerActions.EducationPageAction();
          break;
        case '/experience':
          action = new routerActions.ExperiencePageAction();
          break;
        case '/skills':
          action = new routerActions.SkillsPageAction();
          break;
        case '/personal':
          action = new routerActions.PersonalPageAction();
          break;
        default:
          action = new routerActions.OtherPageAction();
      }
      return of(action);
    });

  constructor(private actions$: Actions, location: Location) {
    this.location = location.path();
  }
}
