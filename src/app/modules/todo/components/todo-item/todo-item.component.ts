import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TodoItemComponent implements OnInit, OnDestroy {
  private _onDestroy$ = new Subject();

  private _itemStateForm: FormGroup;
  public get itemStateForm() {
    return this._itemStateForm;
  }

  @Input() set description(value: string) {
    if (!value) return;
    this._itemStateForm.get('description')?.setValue(value, { emitEvent: false });
  }

  @Input() set isCompleted(value: boolean) {
    this._itemStateForm.get('isCompleted')?.setValue(value, { emitEvent: false });
  }

  @Input() id: number = 0;

  @Output() stateChanged = new EventEmitter();
  @Output() delete = new EventEmitter();

  deleteItem() {
    this.delete.emit(true);
  }

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this._itemStateForm = this.formBuilder.group({
      isCompleted: [false],
      description: '',
    });
  }

  ngOnInit() {
    this._itemStateForm.valueChanges
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(state => {
        this.stateChanged.emit({
          ...state,
          id: this.id
        });
    })
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

}
