import {Action} from "@ngrx/store";

export const ActionTypes = {
  OPEN_PROFILE: 'OPEN_PROFILE',
  CLOSE_PROFILE: 'CLOSE_PROFILE'
};

export class OpenProfileAction implements Action {
  type = ActionTypes.OPEN_PROFILE;
}

export class CloseProfileAction implements Action {
  type = ActionTypes.CLOSE_PROFILE;
}


export type Actions
  = OpenProfileAction
  | CloseProfileAction;
