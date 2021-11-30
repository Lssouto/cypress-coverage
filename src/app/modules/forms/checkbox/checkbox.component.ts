import { Component, OnInit, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlAcessor } from '../component-utils';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true,
  }]
})
export class CheckboxComponent extends BaseControlAcessor {
  name = 'app-checkbox'

  public get uniqueId(): string | number {
    return this.formControlName || this._uniqueId;
  }

  @Input() formControlName: string | undefined;

  handleChangeValue(event: any) {
    this.value = event.target.checked;
  }

  constructor() {
    super();
  }

}
