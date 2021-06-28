import { TopicsFormComponent } from './topics-form/topics-form.component';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:TopicsListComponent
  },
  {
    path:':id/edit',
    component:TopicsFormComponent
  },
  {
    path:'new',
    component:TopicsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicsRoutingModule { }
