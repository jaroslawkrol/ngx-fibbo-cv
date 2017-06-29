import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-circle-icon',
  templateUrl: './circle-icon.component.html',
  styleUrls: ['./circle-icon.component.css']
})
export class CircleIconComponent implements OnInit {

  @Input() fontawesome: string;
  @Input() active: boolean;

  constructor() { }

  ngOnInit() {
  }

}
