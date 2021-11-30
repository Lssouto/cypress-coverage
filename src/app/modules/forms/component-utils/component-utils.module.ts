import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseControl, BaseControlAcessor } from './base-control/base-control.model';
import { ControlAcessor } from './control-acessor/control-acessor.model';

const components = [ControlAcessor, BaseControl, BaseControlAcessor];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [
    CommonModule
  ]
})
export class ComponentUtilsModule { }
