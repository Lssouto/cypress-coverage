import { NgModule } from '@angular/core';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { RouterModule } from '@angular/router';

const routes = [{
  path: '',
  component: TodoContainerComponent,
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class TodoRoutingModule { }
