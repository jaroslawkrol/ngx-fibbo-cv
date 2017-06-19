import {Action} from '@ngrx/store';
import {SkillsGroup} from '../models/skills-group';

export const SKILL_LOAD = 'SKILL_LOAD';
export const SKILL_LOAD_SUCCESS = 'SKILL_LOAD_SUCCESS';
export const RESET = 'RESET';

export class LoadAction implements Action {
  readonly type = SKILL_LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  readonly type = SKILL_LOAD_SUCCESS;

  constructor(public payload: SkillsGroup[]) { }
}

export class ResetAction implements Action {
  readonly type = RESET;

  constructor() { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | ResetAction;
