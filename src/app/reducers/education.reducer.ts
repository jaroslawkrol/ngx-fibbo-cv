import {Action} from '@ngrx/store'
import {EducationRecord} from "../models/education-record";

export interface State {
  spinner: boolean;
  selectedRecord: EducationRecord;
  educationRecords: EducationRecord[];
}

const initialState: State = {
  spinner: true,
  selectedRecord: null,
  educationRecords: []
};

export const EDU_LOAD = 'EDU_LOAD';
export const EDU_LOAD_SUCCESS = 'EDU_LOAD_SUCCESS';
export const EDU_SELECT_ITEM = 'EDU_SELECT_ITEM';

export const RESET = 'RESET';

export function reducer(state: any = initialState, action: Action): any {
  switch (action.type) {
    case EDU_LOAD:
      return Object.assign({}, state, { spinner: true });

    case EDU_SELECT_ITEM:
      const record = action.payload;
      return Object.assign({}, state, { selectedRecord: record });

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
export const getSelectedRecord = (state: State) => state.selectedRecord;

