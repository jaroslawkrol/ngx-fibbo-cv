import {Component, OnInit} from '@angular/core';
import {ExperienceRecord} from "../../models/experience-record";
import {EducationRecord} from "../../models/education-record";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  records: ExperienceRecord[] = [
    new ExperienceRecord('od 2016', 'JK Development', 1, 'xxx'),
    new ExperienceRecord('od 2015', 'Execon ITS sp. z o.o.', 2, 'xxx'),
    new ExperienceRecord('2013-2014', 'Centralny Ośrodek Informatyki', 3, 'xxx'),
    new ExperienceRecord('2013-2013', 'Lacan Technologies', 4, 'xxx')
  ];

  selectedRecord: EducationRecord = null;

  constructor() {
  }

  ngOnInit() {
  }

  select(record: ExperienceRecord) {
    this.selectedRecord = record;
  }
}
