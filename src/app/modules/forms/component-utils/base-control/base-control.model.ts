import { Component, HostBinding, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { makeModifiers } from '..';
import { ControlAcessor } from '../control-acessor/control-acessor.model';


@Component({
  template: '',
})
export class BaseControl {
  name: string = '';
  component: any;

  protected _modifiers: string[] = [];
  private _inputModifiers: string[] = [];

  @HostBinding('class') get classModifier(): string {
    return makeModifiers(this.modifiers, this.name, this._class);
  }

  private _class: string = '';
  @Input() set class(className: string) {
    this._class = className;
  }

  @Input()
  set modifiers(value: string[]) {
    this._inputModifiers = value;
  }
  get modifiers(): string[] {
    const componentModifiers =
      (this.component && this.component.modifiers) || [];
    return [...this._modifiers, ...this._inputModifiers, ...componentModifiers];
  }

  protected _control: any = undefined;
  get control(): NgControl {
    return this._control;
  }

  public addModifier(modifier: string) {
    return [...this._modifiers, modifier];
  }

  public removeModifier(modifier: string) {
    return this._modifiers.filter(m => m != modifier);
  }
}

@Component({ template: '' })
export class BaseControlAcessor extends ControlAcessor {
  name: string = '';
  component: any;

  private _class: string = '';
  @Input() set class(className: string) {
    this._class = className;
  }

  @HostBinding('class') get classModifier(): string {
    return makeModifiers(this.modifiers, this.name, this._class);
  }

  protected _modifiers: string[] = [];
  private _inputModifiers: string[] = [];
  @Input()
  get modifiers(): string[] {
    const componentModifiers =
      (this.component && this.component.modifiers) || [];
    return [...this._modifiers, ...this._inputModifiers, ...componentModifiers];
  }
  set modifiers(value: string[]) {
    this._inputModifiers = Array.isArray(value) ? value : [];
  }

  protected _control: any = undefined;
  get control(): NgControl {
    return this._control;
  }

  public addModifier(modifier: string) {
    return [...this._modifiers, modifier];
  }

  public removeModifier(modifier: string) {
    return this._modifiers.filter(m => m != modifier);
  }
}
