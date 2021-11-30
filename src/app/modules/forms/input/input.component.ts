
import { Component, OnInit, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlAcessor } from '../component-utils';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true,
  }]
})
export class InputComponent extends BaseControlAcessor implements OnInit  {
  name = 'app-input';

  public get uniqueId(): string | number {
    return this.formControlName || this._uniqueId;
  }

  @Input() formControlName: string | undefined;

  handleChangeValue(event: any) {
    this.value = event.target.value;
  }

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
