import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ItemEntity } from '../../entity/item.entity';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoContainerComponent {

  private _todoList: ItemEntity[] = [
    new ItemEntity({ description: 'Comprar um monitor' }),
    new ItemEntity({ description: 'Abrir pote de sorvete' })
  ];
  public get todoList() {
    return this._todoList;
  }

  private _filterConfig: string = 'All';
  public get filterConfig() {
    return this._filterConfig;
  }

  private _orderConfig: string = 'Default';
  public get orderConfig() {
    return this._orderConfig;
  }

  areAllCompleted = false;
  itemToAdd = '';

  handleItemChanged(newItem: ItemEntity) {
    this._todoList = this._todoList.map(item => {
      if (item.id != newItem.id) return item;
      item = newItem;
      return item;
    });
  }

  handleDeleteItem(id: number) {
    this._todoList = this._todoList.filter(item => item.id !== id);
  }
  
  handleFilterChanged(filter: string) {
    this._filterConfig = filter;
  }

  handleOrderChanged(order: string) {
    this._orderConfig = order;
  }

  addItem() {
    if (!this.itemToAdd) return;
    this._todoList.push(new ItemEntity({ description: this.itemToAdd }));
    this.itemToAdd = '';
  }

  markAllAsChecked() {
    this._todoList = this._todoList.map(item => ({
      ...item, 
      isCompleted: this.areAllCompleted,
    }));
  }

  constructor(
    private readonly _cdRef: ChangeDetectorRef
  ) {}
}
