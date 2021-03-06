import { Component, OnInit } from '@angular/core';
import {PersonalRecord} from "../../models/personal-record";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";

import * as fromRoot from '../../reducers/root.reducer';
import * as personalActions from '../../actions/personal.actions';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  records$: Observable<PersonalRecord[]>;
  spinner$: Observable<boolean>;
  selectedRecord$: Observable<PersonalRecord>;

  constructor(private store: Store<fromRoot.State>) {
    this.records$ = store.select(fromRoot.getPersonalRecords);
    this.selectedRecord$ = store.select(fromRoot.getSelectedPersonalRecord);
    this.spinner$ = store.select(fromRoot.getPersonalSpinner);
  }

  ngOnInit() {
  }

  select(record: PersonalRecord) {
    this.store.dispatch(new personalActions.SelectItemAction(record));
  }
}
