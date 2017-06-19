import {Action} from '@ngrx/store';
import {PersonalRecord} from "../models/personal-record";

export const PER_LOAD = 'PER_LOAD';
export const PER_LOAD_SUCCESS = 'PER_LOAD_SUCCESS';
export const RESET = 'RESET';

export class LoadAction implements Action {
  readonly type = PER_LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  readonly type = PER_LOAD_SUCCESS;

  constructor(public payload: PersonalRecord[]) { }
}

export class ResetAction implements Action {
  readonly type = RESET;

  constructor() { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | ResetAction;
