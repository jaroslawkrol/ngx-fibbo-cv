import {Action} from '@ngrx/store';
import {SkillsGroup} from '../models/skills-group';
import {SkillRecord} from "../models/skill-record";

export const SKILL_LOAD = 'SKILL_LOAD';
export const SKILL_LOAD_SUCCESS = 'SKILL_LOAD_SUCCESS';
export const SKILL_SELECT_ITEM = 'SKILL_SELECT_ITEM';
export const RESET = 'RESET';

export class LoadAction implements Action {
  readonly type = SKILL_LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  readonly type = SKILL_LOAD_SUCCESS;

  constructor(public payload: SkillsGroup[]) { }
}

export class SelectItemAction implements Action {
  readonly type = SKILL_SELECT_ITEM;

  constructor(public payload: SkillRecord) { }
}

export class ResetAction implements Action {
  readonly type = RESET;

  constructor() { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | SelectItemAction
  | ResetAction;
