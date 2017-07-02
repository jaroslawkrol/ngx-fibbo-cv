import {Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() level: number;
  @Input() color: string;

  constructor() {

  }

  ngOnInit() {
  }

}
