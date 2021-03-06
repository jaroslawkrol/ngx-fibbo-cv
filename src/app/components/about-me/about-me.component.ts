import {Component, HostListener, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from '../../reducers/root.reducer';
import * as layoutActions from "../../actions/layout.actions";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) {

  }

  ngOnInit() {
  }

  @HostListener('window:popstate', ['$event'])
  @HostListener('window:keydown.escape')
  closeProfile(event?: any) {
    if(event) {
      event.preventDefault();
    }
    this.store.dispatch(new layoutActions.CloseProfileAction());
  }

}
