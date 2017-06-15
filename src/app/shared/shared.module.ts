import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleIconComponent } from './circle-icon/circle-icon.component';
import {SubheaderComponent} from "./subheader/subheader.component";
import {MaterialModule} from "@angular/material";
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [CircleIconComponent, SubheaderComponent, ProgressBarComponent],
  exports: [
    CircleIconComponent,
    SubheaderComponent,
    ProgressBarComponent
  ]
})
export class SharedModule { }
