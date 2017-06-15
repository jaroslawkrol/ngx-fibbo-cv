import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {EducationRecord} from "../../models/education-record";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  records: EducationRecord[] = [
    new EducationRecord('2008-2011', 'I Liceum ogólnokształcące w Radzyniu Podlaskim', 1, 'xxx'),
    new EducationRecord('2011-2015', 'Wojskowa Akademia techniczna w Warszawie', 2, 'xxx'),
    new EducationRecord('2017', 'Wyższa szkoła melanżu', 3, 'xxx'),
    new EducationRecord('2017', 'Wyższa szkoła melanżu', 4, 'xxx'),
  ];

  selectedRecord: EducationRecord = null;

  select(record: EducationRecord) {
    this.selectedRecord = record;
  }

  constructor() { }

  ngOnInit() {
  }

}
