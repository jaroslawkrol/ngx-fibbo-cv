import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {EducationRecord} from "../../models/education-record";
import {Store} from "@ngrx/store";

import * as fromRoot from '../../reducers/root.reducer'
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  records$: Observable<EducationRecord[]>;
  spinner$: Observable<boolean>;

  selectedRecord: EducationRecord = null;

  constructor(private store: Store<fromRoot.State>) {
    this.records$ = store.select(fromRoot.getEducationRecords);
    this.spinner$ = store.select(fromRoot.getEducationSpinner);
  }

  select(record: EducationRecord) {
    this.selectedRecord = record;
  }

  ngOnInit() {
  }

}
