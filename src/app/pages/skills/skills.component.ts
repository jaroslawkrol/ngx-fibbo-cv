import { Component, OnInit } from '@angular/core';
import {SkillsGroup} from "../../models/skills-group";
import {SkillRecord} from "../../models/skill-record";
import {Store} from "@ngrx/store";

import * as fromRoot from '../../reducers/root.reducer';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  groups$: Observable<SkillsGroup[]>;
  spinner$: Observable<boolean>;

  selectedRecord: SkillRecord = null;

  constructor(store: Store<fromRoot.State>) {
    this.groups$ = store.select(fromRoot.getSkillsGroup);
    this.spinner$ = store.select(fromRoot.getSkillsSpinner);
  }

  ngOnInit() {
  }

  select(record: SkillRecord) {
    this.selectedRecord = record;
  }

}
