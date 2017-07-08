import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {Routing} from "../../utils/routing.util";
import {Router} from "@angular/router";

import * as routerActions from "../../actions/router.actions";
import * as layoutActions from "../../actions/layout.actions";
import * as fromRoot from '../../reducers/root.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isHomepage$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>, private router: Router) {
    this.isHomepage$ = this.store.select(fromRoot.getRouterIsHomepage);
  }

  ngOnInit() {
  }

  openProfile() {
    this.store.dispatch(new layoutActions.OpenProfileAction());
  }

  goToDashboard() {
    this.navigateTo(Routing.DASHBOARD);
    this.store.dispatch(new routerActions.HomePageAction());
  }

  private navigateTo(route: string[]) {
    this.router.navigate(route);
  }

}
