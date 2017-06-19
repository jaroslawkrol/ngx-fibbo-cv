import { ActionReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import {createSelector} from 'reselect';

import * as fromLayout from './layout.reducer';
import * as fromRouter from './router.reducer';
import * as fromEducation from './education.reducer';
import * as fromExperience from './experience.reducer';
import * as fromSkills from './skills.reducer';
import * as fromPersonal from './personal.reducer';

export interface State {
  layout: fromLayout.State;
  router: fromRouter.State;
  education: fromEducation.State;
  experience: fromExperience.State;
  skills: fromSkills.State;
  personal: fromPersonal.State;
}

const reducers = {
  layout: fromLayout.reducer,
  router: fromRouter.reducer,
  education: fromEducation.reducer,
  experience: fromExperience.reducer,
  skills: fromSkills.reducer,
  personal: fromPersonal.reducer
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

export const getEducationState = (state: State) => state.education;

export const getEducationSpinner = createSelector(getEducationState, fromEducation.getSpinner);
export const getEducationRecords = createSelector(getEducationState, fromEducation.getEducationRecords);

export const getExperienceState = (state: State) => state.experience;

export const getExperienceSpinner = createSelector(getExperienceState, fromExperience.getSpinner);
export const getExperienceRecords = createSelector(getExperienceState, fromExperience.getExperienceRecords);

export const getSkillsState = (state: State) => state.skills;

export const getSkillsSpinner = createSelector(getSkillsState, fromSkills.getSpinner);
export const getSkillsGroup = createSelector(getSkillsState, fromSkills.getSkillsGroups);

export const getPersonalState = (state: State) => state.personal;

export const getPersonalSpinner = createSelector(getPersonalState, fromPersonal.getSpinner);
export const getPersonalRecords = createSelector(getPersonalState, fromPersonal.getPersonalRecords);

