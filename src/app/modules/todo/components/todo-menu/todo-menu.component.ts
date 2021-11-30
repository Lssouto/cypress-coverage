import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-menu',
  templateUrl: './todo-menu.component.html',
  styleUrls: ['./todo-menu.component.scss']
})
export class TodoMenuComponent {
  @Input() count: number = 0;
  @Output() filter = new EventEmitter();
  @Output() order = new EventEmitter();

  changeFilter(filter: string) {
    this.filter.emit(filter);
  }

  changeOrder(order: string) {
    this.order.emit(order);
  }
}
