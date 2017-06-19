import { Component, OnInit } from '@angular/core';
import {PersonalRecord} from "../../models/personal-record";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";

import * as fromRoot from '../../reducers/root.reducer';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  records$: Observable<PersonalRecord[]>;

  selectedRecord: PersonalRecord = null;

  constructor(store: Store<fromRoot.State>) {
    this.records$ = store.select(fromRoot.getPersonalRecords);
  }

  ngOnInit() {
  }

  select(record: PersonalRecord) {
    this.selectedRecord = record;
  }

}
