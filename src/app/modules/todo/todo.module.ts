import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoMenuComponent } from './components/todo-menu/todo-menu.component';
import { TodoRoutingModule } from './todo-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../forms/input/input.module';
import { StatePipe } from './pipes/state.pipe';
import { OrderPipe } from './pipes/order.pipe';
import { CheckboxModule } from '../forms/checkbox/checkbox.module';
import { ButtonModule } from '../forms/button/button.module';



@NgModule({
  declarations: [
    TodoContainerComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoMenuComponent,
    StatePipe,
    OrderPipe
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    CheckboxModule,
    ButtonModule,
  ],
  exports: [
    StatePipe,
    OrderPipe
  ]
})
export class TodoModule { }
