import {Action} from '@ngrx/store'

export interface State {
  isProfileOpened: boolean;
}

const initialState: State = {
  isProfileOpened: false
};

export const OPEN_PROFILE = 'OPEN_PROFILE';
export const CLOSE_PROFILE = 'CLOSE_PROFILE';

export const RESET = 'RESET';

export function reducer(state: any = initialState, action: Action): any {
  switch (action.type) {
    case OPEN_PROFILE:
      return Object.assign({}, state, { isProfileOpened: true });

    case CLOSE_PROFILE:
      return Object.assign({}, state, { isProfileOpened: false });

    default:
      return state;
  }
}


export const getProfileOpened = (state: State) => state.isProfileOpened;

