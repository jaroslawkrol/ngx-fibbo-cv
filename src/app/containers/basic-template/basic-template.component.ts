import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from '../../reducers/root.reducer';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-basic-template',
  templateUrl: './basic-template.component.html',
  styleUrls: ['./basic-template.component.css']
})
export class BasicTemplateComponent implements OnInit {

  isProfileVisible$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.isProfileVisible$ = store.select(fromRoot.getLayoutProfileOpened);
  }

  ngOnInit() {
  }

}
