import { CommentsListComponent } from './comments-list/comments-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsFormComponent } from './comments-form/comments-form.component';

const routes: Routes = [
  {
    path:'',
    component:CommentsListComponent
  },
  {
    path:':id/edit',
    component:CommentsFormComponent
  },
  {
    path:'new',
    component:CommentsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
