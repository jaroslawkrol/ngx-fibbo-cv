import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleIconComponent } from './circle-icon/circle-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CircleIconComponent
  ],
  declarations: [CircleIconComponent]
})
export class SharedModule { }
