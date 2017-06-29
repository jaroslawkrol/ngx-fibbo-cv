import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

import * as routerActions from "../../actions/router.actions";
import * as fromRoot from '../../reducers/root.reducer';
import {Routing} from "../../utils/routing.util";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  current$: Observable<string>;

  constructor(private store: Store<fromRoot.State>, private router: Router) {
    this.current$ = this.store.select(fromRoot.getRouterCurrent);
  }

  ngOnInit() {
  }

  toEducationPage(): void {
    this.navigateTo(Routing.EDUCATION);
    this.store.dispatch(new routerActions.EducationPageAction());
  }

  toExperiencePage(): void {
    this.navigateTo(Routing.EXPERIENCE);
    this.store.dispatch(new routerActions.ExperiencePageAction());
  }

  toSkillsPage(): void {
    this.navigateTo(Routing.SKILLS);
    this.store.dispatch(new routerActions.SkillsPageAction());
  }

  toPersonalPage(): void {
    this.navigateTo(Routing.PERSONAL);
    this.store.dispatch(new routerActions.PersonalPageAction());
  }

  private navigateTo(route: string[]) {
    this.router.navigate(route);
  }

}
