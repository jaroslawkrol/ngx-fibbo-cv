import {Action} from '@ngrx/store'
import {EducationRecord} from '../models/education-record';

export interface State {
  spinner: boolean;
  experienceRecords: EducationRecord[];
}

const initialState: State = {
  spinner: false,
  experienceRecords: []
};

export const EXP_LOAD = 'EXP_LOAD';
export const EXP_LOAD_SUCCESS = 'EXP_LOAD_SUCCESS';

export const RESET = 'RESET';

export function reducer(state: any = initialState, action: Action): any {
  switch (action.type) {
    case EXP_LOAD:
      return Object.assign({}, state, { spinner: true });

    case EXP_LOAD_SUCCESS:
      const records = action.payload;
      return Object.assign({}, state, { spinner: false, experienceRecords: records });

    case RESET:
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
}

export const getSpinner = (state: State) => state.spinner;
export const getExperienceRecords = (state: State) => state.experienceRecords;

