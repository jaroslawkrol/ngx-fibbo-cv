import {Action} from '@ngrx/store'
import {SkillsGroup} from "../models/skills-group";

export interface State {
  spinner: boolean;
  skillsGroups: SkillsGroup[];
}

const initialState: State = {
  spinner: false,
  skillsGroups: []
};

export const SKILL_LOAD = 'SKILL_LOAD';
export const SKILL_LOAD_SUCCESS = 'SKILL_LOAD_SUCCESS';

export const RESET = 'RESET';

export function reducer(state: any = initialState, action: Action): any {
  switch (action.type) {
    case SKILL_LOAD:
      return Object.assign({}, state, { spinner: true });

    case SKILL_LOAD_SUCCESS:
      const records = action.payload;
      return Object.assign({}, state, { spinner: false, skillsGroups: records });

    case RESET:
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
}

export const getSpinner = (state: State) => state.spinner;
export const getSkillsGroups = (state: State) => state.skillsGroups;

