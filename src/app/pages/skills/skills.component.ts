import { Component, OnInit } from '@angular/core';
import {SkillsGroup} from "../../models/skills-group";
import {SkillRecord} from "../../models/skill-record";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  groups: SkillsGroup[] = [
    new SkillsGroup('Front-end', 1, [
      new SkillRecord('JavaScript', 9, 1, 'logo'),
      new SkillRecord('Angular', 10, 2, 'logo'),
      new SkillRecord('jQuery', 9, 3, 'logo'),
      new SkillRecord('HTML5', 9, 4, 'logo'),
      new SkillRecord('Redux', 8, 5, 'logo'),
      new SkillRecord('Bootstrap', 7, 2, 'logo')
    ]),
    new SkillsGroup('Back-end', 2, [
      new SkillRecord('Java', 8, 1, 'logo'),
      new SkillRecord('Python', 4, 2, 'logo'),
      new SkillRecord('NodeJS', 6, 3, 'logo')
    ]),
    new SkillsGroup('Bazy danych', 3, [
      new SkillRecord('PostgreSQL', 9, 1, 'logo'),
      new SkillRecord('MySQL', 6, 2, 'logo'),
      new SkillRecord('MongoDB', 5, 3, 'logo')
    ]),
    new SkillsGroup('Systemy', 4, [
      new SkillRecord('Microsoft Windows 7-10', 9, 1, 'logo'),
      new SkillRecord('Linux', 7, 2, 'logo')
    ]),
    new SkillsGroup('Narzędzia', 5, [
      new SkillRecord('GIT', 10, 1, 'logo'),
      new SkillRecord('JIRA', 9, 1, 'logo'),
      new SkillRecord('WebStorm', 10, 2, 'logo'),
      new SkillRecord('Eclipse', 7, 3, 'logo')
    ]),
    new SkillsGroup('Inne', 6, [
      new SkillRecord('SCRUM/Agile', 8, 1, 'logo'),
      new SkillRecord('MS Office', 7, 2, 'logo')
    ]),
  ];

  selectedRecord: SkillRecord = null;

  constructor() { }

  ngOnInit() {
  }

  select(record: SkillRecord) {
    this.selectedRecord = record;
  }

}
