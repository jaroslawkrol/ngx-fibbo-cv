import {Action} from '@ngrx/store'
import {EducationRecord} from "../models/education-record";

export interface State {
  spinner: boolean;
  educationRecords: EducationRecord[];
}

const initialState: State = {
  spinner: false,
  educationRecords: []
};

export const LOAD = 'LOAD';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';

export const RESET = 'RESET';

export function reducer(state: any = initialState, action: Action): any {
  switch (action.type) {
    case LOAD:
      return Object.assign({}, state, { spinner: true });

    case LOAD_SUCCESS:
      const records = action.payload;
      return Object.assign({}, state, { spinner: false, educationRecords: records });

    default:
      return state;
  }
}

export const getSpinner = (state: State) => state.spinner;
export const getEducationRecords = (state: State) => state.educationRecords;

