import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleIconComponent } from './circle-icon/circle-icon.component';
import {SubheaderComponent} from "./subheader/subheader.component";
import {MaterialModule} from "@angular/material";
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {NavigationComponent} from "./navigation/navigation.component";
import { EefilComponent } from './eefil/eefil.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [CircleIconComponent, SubheaderComponent, ProgressBarComponent, NavigationComponent, EefilComponent],
  exports: [
    CircleIconComponent,
    SubheaderComponent,
    ProgressBarComponent,
    NavigationComponent,
    EefilComponent
  ]
})
export class SharedModule { }
