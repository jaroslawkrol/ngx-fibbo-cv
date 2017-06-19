import {Action} from '@ngrx/store'
import {PersonalRecord} from "../models/personal-record";

export interface State {
  spinner: boolean;
  personalRecords: PersonalRecord[];
}

const initialState: State = {
  spinner: false,
  personalRecords: []
};

export const PER_LOAD = 'PER_LOAD';
export const PER_LOAD_SUCCESS = 'PER_LOAD_SUCCESS';

export const RESET = 'RESET';

export function reducer(state: any = initialState, action: Action): any {
  switch (action.type) {
    case PER_LOAD:
      return Object.assign({}, state, { spinner: true });

    case PER_LOAD_SUCCESS:
      const records = action.payload;
      return Object.assign({}, state, { spinner: false, personalRecords: records });

    case RESET:
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
}

export const getSpinner = (state: State) => state.spinner;
export const getPersonalRecords = (state: State) => state.personalRecords;

