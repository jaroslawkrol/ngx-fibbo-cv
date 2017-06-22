import {Action} from '@ngrx/store'
import {ExperienceRecord} from '../models/experience-record';

export interface State {
  spinner: boolean;
  selectedRecord: ExperienceRecord;
  experienceRecords: ExperienceRecord[];
}

const initialState: State = {
  spinner: true,
  selectedRecord: null,
  experienceRecords: []
};

export const EXP_LOAD = 'EXP_LOAD';
export const EXP_LOAD_SUCCESS = 'EXP_LOAD_SUCCESS';
export const EXP_SELECT_ITEM = 'EXP_SELECT_ITEM';

export const RESET = 'RESET';

export function reducer(state: any = initialState, action: Action): any {
  switch (action.type) {
    case EXP_LOAD:
      return Object.assign({}, state, {spinner: true});

    case EXP_LOAD_SUCCESS:
      const records = action.payload;
      return Object.assign({}, state, {spinner: false, experienceRecords: records});

    case EXP_SELECT_ITEM:
      const record = action.payload;
      return Object.assign({}, state, {selectedRecord: record});

    case RESET:
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
}

export const getSpinner = (state: State) => state.spinner;
export const getExperienceRecords = (state: State) => state.experienceRecords;
export const getSelectedRecord = (state: State) => state.selectedRecord;

