import {Component, OnInit} from '@angular/core';
import {ExperienceRecord} from "../../models/experience-record";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

import * as fromRoot from '../../reducers/root.reducer';
import * as experienceActions from '../../actions/experience.actions';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  records$: Observable<ExperienceRecord[]>;
  selectedRecord$: Observable<ExperienceRecord>;
  spinner$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.records$ = store.select(fromRoot.getExperienceRecords);
    this.selectedRecord$ = store.select(fromRoot.getSelectedExperienceRecord);
    this.spinner$ = store.select(fromRoot.getExperienceSpinner);
  }

  ngOnInit() {
  }

  select(record: ExperienceRecord) {
    this.store.dispatch(new experienceActions.SelectItemAction(record));
  }
}
