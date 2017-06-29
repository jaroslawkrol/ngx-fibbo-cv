import {Action} from "@ngrx/store";

export const CHECK_CURRENT_PAGE = 'CHECK_CURRENT_PAGE';
export const HOMEPAGE = 'HOMEPAGE';
export const EDUCATION = 'EDUCATION';
export const EXPERIENCE = 'EXPERIENCE';
export const SKILLS = 'SKILLS';
export const PERSONAL = 'PERSONAL';
export const OTHER_PAGE = 'OTHER_PAGE';
export const RESET = 'RESET';

export class CheckCurrentPageAction implements Action {
  readonly type = CHECK_CURRENT_PAGE;

  constructor() { }
}


export class HomePageAction implements Action {
  readonly type = HOMEPAGE;

  constructor() { }
}

export class EducationPageAction implements Action {
  readonly type = EDUCATION;

  constructor() { }
}

export class ExperiencePageAction implements Action {
  readonly type = EXPERIENCE;

  constructor() { }
}

export class SkillsPageAction implements Action {
  readonly type = SKILLS;

  constructor() { }
}

export class PersonalPageAction implements Action {
  readonly type = PERSONAL;

  constructor() { }
}

export class OtherPageAction implements Action {
  readonly type = OTHER_PAGE;

  constructor() { }
}

export class ResetAction implements Action {
  readonly type = RESET;

  constructor() { }
}

export type Actions
  = HomePageAction
  | OtherPageAction
  | ResetAction;
