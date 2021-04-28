import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {
    path:'categories',
    loadChildren:()=> import('./pages/categories/categories.module')
    .then(module=> module.CategoriesModule),
    canActivate:[AuthGuard]
  },
  {
    path:'topics',
    loadChildren:()=> import('./pages/topics/topics.module')
    .then(module=> module.TopicsModule),
    canActivate:[AuthGuard]
  },
  {
    path:'users',
    loadChildren:()=> import('./pages/users/users.module')
    .then(module=> module.UsersModule),
    canActivate:[AuthGuard]
  },
  {
    path:'comments',
    loadChildren:()=> import('./pages/comments/comments.module')
    .then(module=> module.CommentsModule),
    canActivate:[AuthGuard]
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
