import { ActionReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import {createSelector} from 'reselect';

import * as fromLayout from './layout.reducer';
import * as fromRouter from './router.reducer';

export interface State {
  layout: fromLayout.State;
  router: fromRouter.State;
}

const reducers = {
  layout: fromLayout.reducer,
  router: fromRouter.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const getLayoutState = (state: State) => state.layout;

export const getLayoutProfileOpened = createSelector(getLayoutState, fromLayout.getProfileOpened);

export const getRouterState = (state: State) => state.router;

export const getRouterIsHomepage = createSelector(getRouterState, fromRouter.getHomepage);
