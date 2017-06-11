import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleIconComponent } from './circle-icon/circle-icon.component';
import {SubheaderComponent} from "./subheader/subheader.component";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [CircleIconComponent, SubheaderComponent],
  exports: [
    CircleIconComponent,
    SubheaderComponent
  ]
})
export class SharedModule { }
