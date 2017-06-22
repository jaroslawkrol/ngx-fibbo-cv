import { Component, OnInit } from '@angular/core';
import {SkillsGroup} from "../../models/skills-group";
import {SkillRecord} from "../../models/skill-record";
import {Store} from "@ngrx/store";

import * as fromRoot from '../../reducers/root.reducer';
import * as skillActions from '../../actions/skills.actions';

import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  groups$: Observable<SkillsGroup[]>;
  selectedRecord$: Observable<SkillRecord>;
  spinner$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.groups$ = store.select(fromRoot.getSkillsGroup);
    this.selectedRecord$ = store.select(fromRoot.getSelectedSkillRecord);
    this.spinner$ = store.select(fromRoot.getSkillsSpinner);
  }

  ngOnInit() {
  }

  select(record: SkillRecord) {
    this.store.dispatch(new skillActions.SelectItemAction(record));
  }

}
