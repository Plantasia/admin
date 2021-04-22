import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { CommentsListComponent } from './pages/comments/comments-list/comments-list.component';
import { CommentsFormComponent } from './pages/comments/comments-form/comments-form.component';
import { TopicsFormComponent } from './pages/topics/topics-form/topics-form.component';
import { TopicsListComponent } from './pages/topics/topics-list/topics-list.component';


const routes:Routes =[
 
]
@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    CategoriesFormComponent,
    UsersFormComponent,
    UsersListComponent,
    CommentsListComponent,
    CommentsFormComponent,
    TopicsFormComponent,
    TopicsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
