import {Component, OnInit} from '@angular/core';
import {EducationRecord} from "../../models/education-record";
import {Store} from "@ngrx/store";

import * as fromRoot from '../../reducers/root.reducer';
import * as educationActions from '../../actions/education.actions';

import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  records$: Observable<EducationRecord[]>;
  spinner$: Observable<boolean>;
  selectedRecord$: Observable<EducationRecord>;

  constructor(private store: Store<fromRoot.State>) {
    this.records$ = store.select(fromRoot.getEducationRecords);
    this.spinner$ = store.select(fromRoot.getEducationSpinner);
    this.selectedRecord$ = store.select(fromRoot.getSelectedEducationRecord);
  }

  select(record: EducationRecord) {
    this.store.dispatch(new educationActions.SelectItemAction(record));
  }

  ngOnInit() {
  }

}
