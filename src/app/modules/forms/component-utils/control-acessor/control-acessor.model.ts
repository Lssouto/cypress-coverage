import { Component } from '@angular/core';

let uId = 0;

@Component({
  template: '',
})
export class ControlAcessor {
  protected _uniqueId = uId++;
  public _value: any = null;
  get value(): any {
    return this._value;
  }
  set value(val: any) {
    this._value = val;
    try {
      this.onChange(val);
      this.onTouch(val);
    } catch (e) {
      return;
    }
  }

  onChange: any = () => {
    return true;
  };
  onTouch: any = () => {
    return true;
  };

  // this method sets the value programmatically
  writeValue(value: any): void {
    this.value = value;
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
