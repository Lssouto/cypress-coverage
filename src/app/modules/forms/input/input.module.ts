import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { ComponentUtilsModule } from '../component-utils/component-utils.module';



@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    ComponentUtilsModule,
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }
