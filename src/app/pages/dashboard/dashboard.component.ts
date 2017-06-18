import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

import * as routerActions from "../../actions/router.actions";
import * as fromRoot from '../../reducers/root.reducer';
import {Routing} from "../../utils/routing.util";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>, private router: Router) {
  }

  ngOnInit() {
  }

  toEducationPage(): void {
    this.navigateTo(Routing.EDUCATION);
  }

  toExperiencePage(): void {
    this.navigateTo(Routing.EXPERIENCE);
  }

  toSkillsPage(): void {
    this.navigateTo(Routing.SKILLS);
  }

  toPersonalPage(): void {
    this.navigateTo(Routing.PERSONAL);
  }

  private navigateTo(route: string[]) {
    this.router.navigate(route);
    this.store.dispatch(new routerActions.OtherPageAction());
  }
}
