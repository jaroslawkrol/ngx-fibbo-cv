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

  selectedRecord: EducationRecord = null;

  select(record: EducationRecord) {
    this.selectedRecord = record;
  }

  constructor(private store: Store<fromRoot.State>) {
    this.records$ = store.select(fromRoot.getEducationRecords);
  }

  ngOnInit() {
  }

}
