import {Action} from '@ngrx/store'

export interface State {
  isHomepage: boolean;
}

const initialState: State = {
  isHomepage: true
};

export const CHECK_CURRENT_PAGE = 'CHECK_CURRENT_PAGE';
export const HOMEPAGE = 'HOMEPAGE';
export const OTHER_PAGE = 'OTHER_PAGE';

export const RESET = 'RESET';

export function reducer(state: any = initialState, action: Action): any {
  switch (action.type) {
    case CHECK_CURRENT_PAGE:
      return state;

    case HOMEPAGE:
      return Object.assign({}, state, { isHomepage: true });

    case OTHER_PAGE:
      return Object.assign({}, state, { isHomepage: false });

    default:
      return state;
  }
}

export const getHomepage = (state: State) => state.isHomepage;

