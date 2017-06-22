import {Action} from '@ngrx/store'
import {PersonalRecord} from '../models/personal-record';

export interface State {
  spinner: boolean;
  personalRecords: PersonalRecord[];
  selectedRecord: PersonalRecord;
}

const initialState: State = {
  spinner: true,
  personalRecords: [],
  selectedRecord: null
};

export const PER_LOAD = 'PER_LOAD';
export const PER_LOAD_SUCCESS = 'PER_LOAD_SUCCESS';
export const PER_SELECT_ITEM = 'PER_SELECT_ITEM';

export const RESET = 'RESET';

export function reducer(state: any = initialState, action: Action): any {
  switch (action.type) {
    case PER_LOAD:
      return Object.assign({}, state, { spinner: true });

    case PER_LOAD_SUCCESS:
      const records = action.payload;
      return Object.assign({}, state, { spinner: false, personalRecords: records });

    case PER_SELECT_ITEM:
      const record = action.payload;
      return Object.assign({}, state, { selectedRecord: record });

    case RESET:
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
}

export const getSpinner = (state: State) => state.spinner;
export const getPersonalRecords = (state: State) => state.personalRecords;
export const getSelectedRecord = (state: State) => state.selectedRecord;

