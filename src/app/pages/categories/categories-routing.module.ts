import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';

const routes: Routes = [
  {
    path:'',
    component:CategoriesListComponent
  },
  {
    path:':id/edit',
    component:CategoriesFormComponent
  },
  {
    path:'new',
    component:CategoriesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
