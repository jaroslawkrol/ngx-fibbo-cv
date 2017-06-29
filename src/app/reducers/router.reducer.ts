import {Action} from '@ngrx/store'

export const CHECK_CURRENT_PAGE = 'CHECK_CURRENT_PAGE';
export const HOMEPAGE = 'HOMEPAGE';
export const EDUCATION = 'EDUCATION';
export const EXPERIENCE = 'EXPERIENCE';
export const SKILLS = 'SKILLS';
export const PERSONAL = 'PERSONAL';
export const OTHER_PAGE = 'OTHER_PAGE';

export const RESET = 'RESET';

export interface State {
  isHomepage: boolean;
  current: string;
}

const initialState: State = {
  isHomepage: true,
  current: HOMEPAGE
};

export function reducer(state: any = initialState, action: Action): any {
  switch (action.type) {
    case CHECK_CURRENT_PAGE:
      return state;

    case HOMEPAGE:
      return Object.assign({}, state, { isHomepage: true, current: HOMEPAGE });

    case EDUCATION:
    case EXPERIENCE:
    case SKILLS:
    case PERSONAL:
    case OTHER_PAGE:
      return Object.assign({}, state, { isHomepage: false, current: action.type });

    default:
      return state;
  }
}

export const getHomepage = (state: State) => state.isHomepage;
export const getCurrent = (state: State) => state.current;

