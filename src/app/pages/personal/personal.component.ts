import { Component, OnInit } from '@angular/core';
import {PersonalRecord} from "../../models/personal-record";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  records: PersonalRecord[] = [
    new PersonalRecord('Podróże', 1, 'xxx'),
    new PersonalRecord('Rozwój', 2, 'xxx'),
    new PersonalRecord('Muzyka', 3, 'xxx')
  ];

  selectedRecord: PersonalRecord = null;

  constructor() {
  }

  ngOnInit() {
  }

  select(record: PersonalRecord) {
    this.selectedRecord = record;
  }

}
