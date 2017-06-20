import {Action} from '@ngrx/store'
import {EducationRecord} from "../models/education-record";

export interface State {
  spinner: boolean;
  educationRecords: EducationRecord[];
}

const initialState: State = {
  spinner: true,
  educationRecords: []
};

export const EDU_LOAD = 'EDU_LOAD';
export const EDU_LOAD_SUCCESS = 'EDU_LOAD_SUCCESS';

export const RESET = 'RESET';

export function reducer(state: any = initialState, action: Action): any {
  switch (action.type) {
    case EDU_LOAD:
      return Object.assign({}, state, { spinner: true });

    case EDU_LOAD_SUCCESS:
      const records = action.payload;
      return Object.assign({}, state, { spinner: false, educationRecords: records });

    case RESET:
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
}

export const getSpinner = (state: State) => state.spinner;
export const getEducationRecords = (state: State) => state.educationRecords;

