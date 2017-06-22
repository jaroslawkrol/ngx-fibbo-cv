import {Action} from '@ngrx/store';
import {EducationRecord} from '../models/education-record';

export const EDU_LOAD = 'EDU_LOAD';
export const EDU_LOAD_SUCCESS = 'EDU_LOAD_SUCCESS';
export const EDU_SELECT_ITEM = 'EDU_SELECT_ITEM';
export const RESET = 'RESET';

export class LoadAction implements Action {
  readonly type = EDU_LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  readonly type = EDU_LOAD_SUCCESS;

  constructor(public payload: EducationRecord[]) { }
}

export class SelectItemAction implements Action {
  readonly type = EDU_SELECT_ITEM;

  constructor(public payload: EducationRecord) { }
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
