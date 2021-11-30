import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import { ComponentUtilsModule } from '../component-utils/component-utils.module';



@NgModule({
  declarations: [
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    ComponentUtilsModule,
  ],
  exports: [
    CheckboxComponent
  ]
})
export class CheckboxModule { }
