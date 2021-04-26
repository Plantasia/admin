import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'categories',
    loadChildren:()=> import('./pages/categories/categories.module')
    .then(module=> module.CategoriesModule)
  },
  {
    path:'topics',
    loadChildren:()=> import('./pages/topics/topics.module')
    .then(module=> module.TopicsModule)
  },
  {
    path:'users',
    loadChildren:()=> import('./pages/users/users.module')
    .then(module=> module.UsersModule)
  },
  {
    path:'comments',
    loadChildren:()=> import('./pages/comments/comments.module')
    .then(module=> module.CommentsModule)
  },
  {
    path:'login',
    loadChildren:()=> import('./pages/login/login.module')
    .then(module=> module.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
