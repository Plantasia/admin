import { TopicsListComponent } from './../topics/topics-list/topics-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsFormComponent } from '../topics/topics-form/topics-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersFormComponent } from './users-form/users-form.component';

const routes: Routes = [
  {
    path:'',
    component:UsersListComponent
  },
  {
    path:':id/edit',
    component:UsersFormComponent
  },
  {
    path:'new',
    component:UsersFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
