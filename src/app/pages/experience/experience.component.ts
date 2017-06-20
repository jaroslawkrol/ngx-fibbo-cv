import {Component, OnInit} from '@angular/core';
import {ExperienceRecord} from "../../models/experience-record";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

import * as fromRoot from '../../reducers/root.reducer'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  records$: Observable<ExperienceRecord[]>;
  spinner$: Observable<boolean>;

  selectedRecord: ExperienceRecord = null;

  constructor(store: Store<fromRoot.State>) {
    this.records$ = store.select(fromRoot.getExperienceRecords);
    this.spinner$ = store.select(fromRoot.getExperienceSpinner);
  }

  ngOnInit() {
  }

  select(record: ExperienceRecord) {
    this.selectedRecord = record;
  }
}
