import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateTaskComponent } from './create-task/create-task.component';
import { FormComponent } from './form/form.component';
import { ListTaskComponent} from './list-task/list-task.component';


const routes: Routes = [
  { path: '', redirectTo: '/list-task', pathMatch: 'full' },
  { path: 'list-task', component: ListTaskComponent },
  { path: 'create', component: CreateTaskComponent },
  { path: 'update-task/:id', component: FormComponent }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
