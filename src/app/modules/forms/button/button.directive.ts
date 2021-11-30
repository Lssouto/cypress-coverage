import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appButton]',
  host: {
    '[class]': '[classList]',
  }
})
export class ButtonDirective {
  private _classList: string[] = [];
  public get classList () {
    return `app-button${this._classList.length ? ' ' + this._classList.join(' ') : ''}`
  }
  @Input() set class(value: string) {
    this._classList = value.split(' ');
  }
}
