import {Action} from '@ngrx/store';
import {ExperienceRecord} from '../models/experience-record';

export const EXP_LOAD = 'EXP_LOAD';
export const EXP_LOAD_SUCCESS = 'EXP_LOAD_SUCCESS';
export const RESET = 'RESET';

export class LoadAction implements Action {
  readonly type = EXP_LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  readonly type = EXP_LOAD_SUCCESS;

  constructor(public payload: ExperienceRecord[]) { }
}

export class ResetAction implements Action {
  readonly type = RESET;

  constructor() { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | ResetAction;
