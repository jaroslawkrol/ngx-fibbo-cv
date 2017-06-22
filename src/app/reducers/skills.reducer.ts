import {Action} from '@ngrx/store'
import {SkillsGroup} from "../models/skills-group";
import {SkillRecord} from "../models/skill-record";

export interface State {
  spinner: boolean;
  selectedRecord: SkillRecord;
  skillsGroups: SkillsGroup[];
}

const initialState: State = {
  spinner: true,
  selectedRecord: null,
  skillsGroups: []
};

export const SKILL_LOAD = 'SKILL_LOAD';
export const SKILL_LOAD_SUCCESS = 'SKILL_LOAD_SUCCESS';
export const SKILL_SELECT_ITEM = 'SKILL_SELECT_ITEM';

export const RESET = 'RESET';

export function reducer(state: any = initialState, action: Action): any {
  switch (action.type) {
    case SKILL_LOAD:
      return Object.assign({}, state, { spinner: true });

    case SKILL_LOAD_SUCCESS:
      const records = action.payload;
      return Object.assign({}, state, { spinner: false, skillsGroups: records });

    case SKILL_SELECT_ITEM:
      const record = action.payload;
      return Object.assign({}, state, { selectedRecord: record });

    case RESET:
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
}

export const getSpinner = (state: State) => state.spinner;
export const getSelectedRecord = (state: State) => state.selectedRecord;
export const getSkillsGroups = (state: State) => state.skillsGroups;

