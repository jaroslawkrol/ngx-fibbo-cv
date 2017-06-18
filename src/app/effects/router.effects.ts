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
      if (this.checkIfHomepage()) {
        action = new routerActions.HomePageAction();
      } else {
        action = new routerActions.OtherPageAction();
      }
      return of(action);
    });

  constructor(private actions$: Actions, location: Location) {
    this.location = location.path();
  }

  private checkIfHomepage(): boolean {
    return !(HOMEPAGE_URLS.indexOf(this.location) < 0);
  }
}
